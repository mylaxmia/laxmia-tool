from pathlib import Path
from uuid import uuid4

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from rembg import remove


app = FastAPI(title="Product Media Generator API")
OUTPUT_DIR = Path("output")
OUTPUT_DIR.mkdir(exist_ok=True)


@app.post("/remove-background")
async def remove_background(file: UploadFile = File(...)):
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Please upload a valid image file.")

    input_bytes = await file.read()
    if not input_bytes:
        raise HTTPException(status_code=400, detail="Uploaded file is empty.")

    output_bytes = remove(input_bytes)

    original_name = Path(file.filename or "image").stem
    output_path = OUTPUT_DIR / f"{original_name}_{uuid4().hex}.png"
    output_path.write_bytes(output_bytes)

    return FileResponse(
        path=output_path,
        media_type="image/png",
        filename=f"{original_name}_no_bg.png",
    )