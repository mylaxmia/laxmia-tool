from fastapi import Request, HTTPException
from app.models import User
from app.db import SessionLocal
from starlette.responses import Response
from typing import Optional
from datetime import datetime, timedelta
import secrets

SESSION_COOKIE_NAME = "session_id"
SESSION_TTL = timedelta(hours=12)

# In production, use Redis or DB for sessions. Here, dict for minimal patch.
sessions = {}

def create_session(user_id: int, is_admin: int) -> str:
    session_id = secrets.token_urlsafe(32)
    sessions[session_id] = {
        "user_id": user_id,
        "is_admin": is_admin,
        "created_at": datetime.utcnow(),
        "expires_at": datetime.utcnow() + SESSION_TTL,
    }
    return session_id

def get_session(session_id: str) -> Optional[dict]:
    session = sessions.get(session_id)
    if not session:
        return None
    if session["expires_at"] < datetime.utcnow():
        sessions.pop(session_id, None)
        return None
    return session

def destroy_session(session_id: str):
    sessions.pop(session_id, None)

def set_session_cookie(response: Response, session_id: str):
    response.set_cookie(
        key=SESSION_COOKIE_NAME,
        value=session_id,
        httponly=True,
        secure=False,  # Set True if HTTPS
        samesite="Lax",
        max_age=int(SESSION_TTL.total_seconds()),
    )

def require_admin(request: Request):
    session_id = request.cookies.get(SESSION_COOKIE_NAME)
    session = get_session(session_id) if session_id else None
    if not session or not session.get("is_admin"):
        raise HTTPException(status_code=403, detail="Admin access required.")
    return session

def require_auth(request: Request):
    session_id = request.cookies.get(SESSION_COOKIE_NAME)
    session = get_session(session_id) if session_id else None
    if not session:
        raise HTTPException(status_code=401, detail="Authentication required.")
    return session
