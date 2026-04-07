import os
from pathlib import Path
from uuid import uuid4

UPLOAD_DIR = os.getenv("MEDIA_UPLOAD_DIR", "uploads")
Path(UPLOAD_DIR).mkdir(parents=True, exist_ok=True)

def save_file(file_obj, filename=None):
    ext = Path(file_obj.filename).suffix
    fname = filename or f"{uuid4().hex}{ext}"
    out_path = Path(UPLOAD_DIR) / fname
    with open(out_path, "wb") as f:
        f.write(file_obj.file.read())
    return str(out_path)
