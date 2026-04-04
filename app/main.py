import io
import json
import os
from datetime import datetime, timedelta
from pathlib import Path
from uuid import uuid4

from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from PIL import Image, ImageDraw, ImageFilter, ImageFont
from rembg import remove


BASE_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = BASE_DIR / "output"
ORIGINALS_DIR = OUTPUT_DIR / "originals"
PROCESSED_DIR = OUTPUT_DIR / "processed"
BACKGROUND_DIR = OUTPUT_DIR / "background_applied"
FINAL_DIR = OUTPUT_DIR / "final"
STATIC_DIR = BASE_DIR / "static"
SCALE_DIR = BASE_DIR / "scales"
SAVED_IMAGES_FILE = OUTPUT_DIR / "saved_images.json"
PHONE_CAPTURE_PAGE = STATIC_DIR / "phone_capture.html"
MAX_SAVED_IMAGES = 5

for directory in (OUTPUT_DIR, ORIGINALS_DIR, PROCESSED_DIR, BACKGROUND_DIR, FINAL_DIR):
    directory.mkdir(parents=True, exist_ok=True)

SCALE_TEMPLATE_PATHS = {
    "rectangular": SCALE_DIR / "rectangular.png",
    "box": SCALE_DIR / "box.png",
    "minimal": SCALE_DIR / "minimal.png",
}

SCALE_LAYOUTS = {
    "rectangular": {"pad": (180, 220, 520, 460), "display": (560, 350)},
    "box": {"pad": (190, 205, 500, 450), "display": (550, 340)},
    "minimal": {"pad": (200, 230, 500, 460), "display": (545, 355)},
}

app = FastAPI(title="Product Media Generator API")
app.mount("/output", StaticFiles(directory=OUTPUT_DIR), name="output")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

PHONE_SESSION_TTL = timedelta(hours=6)
phone_sessions: dict[str, dict] = {}
PUBLIC_BASE_URL = os.getenv("PUBLIC_BASE_URL", "").strip().rstrip("/")


def _sanitize_filename(filename: str) -> str:
    safe_name = Path(filename).name
    if not safe_name:
        raise HTTPException(status_code=400, detail="Invalid filename.")
    return safe_name


def _read_saved_images() -> list[str]:
    if not SAVED_IMAGES_FILE.exists():
        return []
    try:
        data = json.loads(SAVED_IMAGES_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return []
    if not isinstance(data, list):
        return []
    return [str(item) for item in data if isinstance(item, str)]


def _write_saved_images(images: list[str]) -> None:
    SAVED_IMAGES_FILE.write_text(json.dumps(images, indent=2), encoding="utf-8")


def _saved_images_payload(images: list[str]) -> list[dict[str, str]]:
    return [{"name": name, "url": f"/output/processed/{name}"} for name in images]


def _validate_image_upload(file: UploadFile) -> None:
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail=f"Invalid image file: {file.filename}")


def _make_unique_filename(original_name: str) -> str:
    stem = Path(original_name or "image").stem
    return f"{stem}_{uuid4().hex}.png"


def _make_unique_original_filename(original_name: str) -> str:
    source = Path(original_name or "phone_capture.jpg")
    stem = source.stem or "phone_capture"
    suffix = source.suffix.lower()
    if suffix not in {".jpg", ".jpeg", ".png", ".webp"}:
        suffix = ".jpg"
    return f"{stem}_{uuid4().hex}{suffix}"


def _purge_stale_phone_sessions() -> None:
    cutoff = datetime.utcnow() - PHONE_SESSION_TTL
    expired = [session_id for session_id, payload in phone_sessions.items() if payload.get("created_at") < cutoff]
    for session_id in expired:
        phone_sessions.pop(session_id, None)


def _save_upload_bytes(raw_bytes: bytes, original_name: str, target_dir: Path) -> str:
    filename = _make_unique_filename(original_name)
    out_path = target_dir / filename
    out_path.write_bytes(raw_bytes)
    return filename


def _build_background(size: tuple[int, int], background_type: str) -> Image.Image:
    if background_type == "white":
        return Image.new("RGBA", size, (255, 255, 255, 255))
    if background_type == "light_gray":
        return Image.new("RGBA", size, (238, 238, 238, 255))
    if background_type == "studio_blue":
        return Image.new("RGBA", size, (218, 231, 245, 255))
    if background_type == "warm_beige":
        return Image.new("RGBA", size, (241, 231, 214, 255))
    if background_type == "soft_gradient":
        gradient = Image.new("RGBA", size)
        draw = ImageDraw.Draw(gradient)
        width, height = size
        for y in range(height):
            ratio = y / max(1, height - 1)
            r = int(245 - (20 * ratio))
            g = int(248 - (25 * ratio))
            b = int(255 - (35 * ratio))
            draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
        return gradient
    raise HTTPException(status_code=400, detail="Unsupported background type.")


def _parse_hex_color(hex_value: str) -> tuple[int, int, int, int]:
    value = (hex_value or "").strip().lstrip("#")
    if len(value) != 6:
        raise HTTPException(status_code=400, detail="Fill color must be a 6-digit hex value.")
    try:
        r = int(value[0:2], 16)
        g = int(value[2:4], 16)
        b = int(value[4:6], 16)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="Invalid fill color value.") from exc
    return (r, g, b, 255)


def _apply_template_overlay(canvas: Image.Image, template_style: str) -> Image.Image:
    if template_style == "clean":
        return canvas

    out = canvas.copy()
    draw = ImageDraw.Draw(out)
    width, height = out.size

    if template_style == "card":
        draw.rounded_rectangle(
            [(16, 16), (width - 16, height - 16)],
            radius=18,
            outline=(255, 255, 255, 155),
            width=3,
        )
        draw.rounded_rectangle(
            [(26, 26), (width - 26, height - 26)],
            radius=12,
            outline=(20, 20, 20, 50),
            width=1,
        )
        return out

    if template_style == "studio":
        overlay = Image.new("RGBA", out.size, (0, 0, 0, 0))
        overlay_draw = ImageDraw.Draw(overlay)
        overlay_draw.ellipse(
            [
                (int(width * 0.08), int(height * 0.10)),
                (int(width * 0.92), int(height * 0.88)),
            ],
            fill=(255, 255, 255, 45),
        )
        overlay = overlay.filter(ImageFilter.GaussianBlur(radius=10))
        out.alpha_composite(overlay)
        return out

    raise HTTPException(status_code=400, detail="Invalid template style.")


def _fit_product_to_pad(product: Image.Image, pad_box: tuple[int, int, int, int]) -> tuple[Image.Image, int, int]:
    pad_x1, pad_y1, pad_x2, pad_y2 = pad_box
    pad_width = pad_x2 - pad_x1
    pad_height = pad_y2 - pad_y1

    fitted = product.copy()
    max_width = int(pad_width * 0.60)
    max_height = int(pad_height * 0.70)
    fitted.thumbnail((max_width, max_height), Image.LANCZOS)

    x = pad_x1 + (pad_width - fitted.width) // 2
    y = pad_y2 - fitted.height - max(8, int(pad_height * 0.08))
    return fitted, x, y


def _load_scale_template(scale_type: str) -> Image.Image:
    template_path = SCALE_TEMPLATE_PATHS.get(scale_type)
    if template_path is None:
        raise HTTPException(status_code=400, detail="Invalid scale type.")
    if not template_path.exists():
        raise HTTPException(
            status_code=500,
            detail=f"Missing scale template: {template_path.name}",
        )
    return Image.open(template_path).convert("RGBA")


@app.get("/")
def index() -> FileResponse:
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/phone-capture")
def phone_capture_page() -> FileResponse:
    return FileResponse(PHONE_CAPTURE_PAGE)


@app.post("/phone-connect/session")
def create_phone_connect_session(request: Request):
    _purge_stale_phone_sessions()

    session_id = uuid4().hex[:10]
    phone_sessions[session_id] = {
        "created_at": datetime.utcnow(),
        "next_id": 1,
        "uploads": [],
    }

    connect_path = f"/phone-capture?session={session_id}"
    connect_url = f"{PUBLIC_BASE_URL}{connect_path}" if PUBLIC_BASE_URL else str(request.url_for("phone_capture_page")) + f"?session={session_id}"

    return JSONResponse(
        {
            "session_id": session_id,
            "connect_url": connect_url,
        }
    )


@app.post("/phone-connect/{session_id}/upload")
async def phone_connect_upload(session_id: str, file: UploadFile = File(...)):
    _purge_stale_phone_sessions()
    session = phone_sessions.get(session_id)
    if session is None:
        raise HTTPException(status_code=404, detail="Phone session not found or expired.")

    _validate_image_upload(file)
    raw_bytes = await file.read()
    if not raw_bytes:
        raise HTTPException(status_code=400, detail="Uploaded file is empty.")

    filename = _make_unique_original_filename(file.filename or "phone_capture.jpg")
    out_path = ORIGINALS_DIR / filename
    out_path.write_bytes(raw_bytes)

    upload_id = int(session["next_id"])
    session["next_id"] = upload_id + 1
    session["uploads"].append(
        {
            "id": upload_id,
            "name": filename,
            "url": f"/output/originals/{filename}",
        }
    )

    # Keep only recent phone uploads for this session.
    session["uploads"] = session["uploads"][-20:]

    return JSONResponse(
        {
            "message": "Uploaded from phone.",
            "upload": session["uploads"][-1],
        }
    )


@app.get("/phone-connect/{session_id}/uploads")
def phone_connect_uploads(session_id: str, after: int = 0):
    _purge_stale_phone_sessions()
    session = phone_sessions.get(session_id)
    if session is None:
        raise HTTPException(status_code=404, detail="Phone session not found or expired.")

    uploads = [item for item in session["uploads"] if int(item.get("id", 0)) > int(after)]
    return JSONResponse({"uploads": uploads})


@app.post("/upload-images")
async def upload_images(
    file1: UploadFile | None = File(None),
    file2: UploadFile | None = File(None),
    file3: UploadFile | None = File(None),
    file4: UploadFile | None = File(None),
    file5: UploadFile | None = File(None),
):
    files = [file for file in (file1, file2, file3, file4, file5) if file is not None]
    if not files:
        raise HTTPException(status_code=400, detail="No files uploaded.")

    processed_filenames = []
    for index, file in enumerate(files, start=1):
        _validate_image_upload(file)
        input_bytes = await file.read()
        if not input_bytes:
            raise HTTPException(status_code=400, detail="One of the uploaded files is empty.")

        removed_bytes = remove(
            input_bytes,
            alpha_matting=True,
            alpha_matting_foreground_threshold=240,
            alpha_matting_background_threshold=10,
            alpha_matting_erode_size=8,
        )
        image = Image.open(io.BytesIO(removed_bytes)).convert("RGBA")
        alpha = image.getchannel("A")
        alpha = alpha.point(lambda value: 0 if value < 10 else (255 if value > 252 else value))
        image.putalpha(alpha)

        filename = _make_unique_filename(file.filename or f"image_{index}.png")
        output_path = PROCESSED_DIR / filename
        image.save(output_path)
        processed_filenames.append(filename)

    return JSONResponse({"images": processed_filenames})


@app.post("/remove-backgrounds")
async def remove_backgrounds(files: list[UploadFile] = File(...)):
    if not files:
        raise HTTPException(status_code=400, detail="No files uploaded.")
    if len(files) > 5:
        raise HTTPException(status_code=400, detail="Maximum 5 images allowed.")

    processed = []
    for file in files:
        _validate_image_upload(file)
        input_bytes = await file.read()
        if not input_bytes:
            raise HTTPException(status_code=400, detail=f"Empty file uploaded: {file.filename}")

        removed_bytes = remove(
            input_bytes,
            alpha_matting=True,
            alpha_matting_foreground_threshold=240,
            alpha_matting_background_threshold=10,
            alpha_matting_erode_size=8,
        )
        image = Image.open(io.BytesIO(removed_bytes)).convert("RGBA")
        alpha = image.getchannel("A")
        alpha = alpha.point(lambda value: 0 if value < 10 else (255 if value > 252 else value))
        image.putalpha(alpha)

        filename = _make_unique_filename(file.filename or "image")
        out_path = PROCESSED_DIR / filename
        image.save(out_path)
        processed.append({"name": filename, "url": f"/output/processed/{filename}"})

    return JSONResponse({"message": "Background removed for all images.", "images": processed})


@app.post("/remove-background")
async def remove_background_single(file: UploadFile = File(...)):
    _validate_image_upload(file)
    input_bytes = await file.read()
    if not input_bytes:
        raise HTTPException(status_code=400, detail=f"Empty file uploaded: {file.filename}")

    removed_bytes = remove(
        input_bytes,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=8,
    )
    image = Image.open(io.BytesIO(removed_bytes)).convert("RGBA")
    alpha = image.getchannel("A")
    alpha = alpha.point(lambda value: 0 if value < 10 else (255 if value > 252 else value))
    image.putalpha(alpha)

    filename = _make_unique_filename(file.filename or "image")
    out_path = PROCESSED_DIR / filename
    image.save(out_path)

    return JSONResponse(
        {
            "message": "Background removed successfully.",
            "image": {"name": filename, "url": f"/output/processed/{filename}"},
        }
    )


@app.get("/saved-images")
def get_saved_images():
    saved = _read_saved_images()
    return JSONResponse({"images": _saved_images_payload(saved)})


@app.post("/saved-images/{filename}")
def save_processed_image(filename: str):
    safe_name = _sanitize_filename(filename)
    file_path = PROCESSED_DIR / safe_name
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Processed image not found.")

    saved = _read_saved_images()
    if safe_name not in saved:
        saved.append(safe_name)
    if len(saved) > MAX_SAVED_IMAGES:
        saved = saved[-MAX_SAVED_IMAGES:]
    _write_saved_images(saved)

    return JSONResponse(
        {
            "message": "Image saved.",
            "images": _saved_images_payload(saved),
        }
    )


@app.post("/apply-background")
def apply_background(
    image_name: str = Form(...),
    background_type: str = Form(...),
):
    source_path = PROCESSED_DIR / image_name
    if not source_path.exists():
        raise HTTPException(status_code=404, detail="Processed image not found.")

    product = Image.open(source_path).convert("RGBA")
    background = _build_background(product.size, background_type)
    background.alpha_composite(product)

    output_name = f"bg_{Path(image_name).stem}_{background_type}.png"
    output_path = BACKGROUND_DIR / output_name
    background.save(output_path)

    return JSONResponse(
        {
            "message": "Background applied successfully.",
            "image": {"name": output_name, "url": f"/output/background_applied/{output_name}"},
        }
    )


@app.post("/apply-style")
def apply_style(
    image_name: str = Form(...),
    fill_color: str = Form("#f5f5f5"),
    template_style: str = Form("clean"),
    shadow_strength: int = Form(55),
):
    source_path = PROCESSED_DIR / image_name
    if not source_path.exists():
        source_path = BACKGROUND_DIR / image_name
    if not source_path.exists():
        raise HTTPException(status_code=404, detail="Processed image not found.")

    product = Image.open(source_path).convert("RGBA")
    background = Image.new("RGBA", product.size, _parse_hex_color(fill_color))

    clamped_shadow = max(0, min(100, int(shadow_strength)))
    if clamped_shadow > 0:
        alpha = product.getchannel("A")
        shadow = Image.new("RGBA", product.size, (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow)
        bbox = alpha.getbbox()
        if bbox:
            x1, y1, x2, y2 = bbox
            blur_radius = max(2, int(clamped_shadow / 8))
            offset_y = max(4, int(clamped_shadow / 10))
            shadow_alpha = min(170, 40 + clamped_shadow)
            shadow_draw.ellipse(
                [
                    (x1 + 8, y2 - 4 + offset_y),
                    (x2 - 8, y2 + 24 + offset_y),
                ],
                fill=(0, 0, 0, shadow_alpha),
            )
            shadow = shadow.filter(ImageFilter.GaussianBlur(radius=blur_radius))
            background.alpha_composite(shadow)

    background.alpha_composite(product)
    styled = _apply_template_overlay(background, template_style)

    output_name = f"styled_{Path(image_name).stem}_{uuid4().hex[:8]}.png"
    output_path = BACKGROUND_DIR / output_name
    styled.save(output_path)

    return JSONResponse(
        {
            "message": "Style applied successfully.",
            "image": {"name": output_name, "url": f"/output/background_applied/{output_name}"},
        }
    )


@app.post("/generate-final-image")
def generate_final_image(
    selected_image: str = Form(...),
    length: float = Form(...),
    breadth: float = Form(...),
    height: float = Form(...),
    weight: float = Form(...),
    scale_type: str = Form(...),
):
    selected_path = PROCESSED_DIR / selected_image
    if not selected_path.exists():
        selected_path = BACKGROUND_DIR / selected_image
    if not selected_path.exists():
        raise HTTPException(status_code=404, detail="Selected image not found.")

    scale = _load_scale_template(scale_type)
    layout = SCALE_LAYOUTS[scale_type]
    pad_box = layout["pad"]
    display_pos = layout["display"]

    product = Image.open(selected_path).convert("RGBA")
    fitted_product, place_x, place_y = _fit_product_to_pad(product, pad_box)

    shadow_layer = Image.new("RGBA", scale.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_layer)
    shadow_margin = max(8, fitted_product.width // 10)
    shadow_x1 = place_x + shadow_margin
    shadow_x2 = place_x + fitted_product.width - shadow_margin
    shadow_y1 = place_y + fitted_product.height - 10
    shadow_y2 = shadow_y1 + 18
    shadow_draw.ellipse([(shadow_x1, shadow_y1), (shadow_x2, shadow_y2)], fill=(0, 0, 0, 65))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=4))

    scale.alpha_composite(shadow_layer)
    scale.alpha_composite(fitted_product, (place_x, place_y))

    draw = ImageDraw.Draw(scale)
    label_font = None
    for font_name in ("arialbd.ttf", "Arial Bold.ttf", "DejaVuSans-Bold.ttf"):
        try:
            label_font = ImageFont.truetype(font_name, 20)
            break
        except OSError:
            continue
    if label_font is None:
        label_font = ImageFont.load_default()

    prod_left = place_x
    prod_top = place_y
    prod_right = place_x + fitted_product.width
    prod_bottom = place_y + fitted_product.height
    line_y = prod_bottom + 16
    line_x = prod_right + 16

    draw.line([(prod_left, line_y), (prod_right, line_y)], fill="black", width=2)
    draw.line([(line_x, prod_top), (line_x, prod_bottom)], fill="black", width=2)
    draw.text((prod_left, line_y + 8), f"{length:g} cm", fill="black", font=label_font)
    draw.text((line_x + 8, prod_top), f"{breadth:g} cm", fill="black", font=label_font)
    size_text = f"LxBxH: {length:g} x {breadth:g} x {height:g} cm"
    draw.text((prod_left, max(8, prod_top - 30)), size_text, fill="black", font=label_font)

    weight_font = None
    for font_name in ("digital-7.ttf", "DS-DIGIB.TTF", "arialbd.ttf", "DejaVuSans-Bold.ttf"):
        try:
            weight_font = ImageFont.truetype(font_name, 42)
            break
        except OSError:
            continue
    if weight_font is None:
        weight_font = ImageFont.load_default()

    draw.text(display_pos, f"{weight:.2f} g", fill="black", font=weight_font)

    output_name = f"final_{uuid4().hex}.png"
    output_path = FINAL_DIR / output_name
    scale.convert("RGB").save(output_path)

    return JSONResponse(
        {
            "message": "Final image generated successfully.",
            "image_url": f"/output/final/{output_name}",
            "length": length,
            "breadth": breadth,
            "height": height,
            "weight": weight,
            "scale_type": scale_type,
        }
    )