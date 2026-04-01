# Phase 1 - FastAPI Background Removal

This phase contains a minimal FastAPI backend with one endpoint:

- `POST /remove-background`

It accepts a single uploaded image, removes the background using `rembg`, saves the processed PNG into the `output/` folder, and returns the processed image file.

## Setup

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Run

```bash
uvicorn app.main:app --reload
```

## Test

Open `http://127.0.0.1:8000/docs` and use the `/remove-background` endpoint.