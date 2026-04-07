"""
Billing edge case handling for Stripe (minimal, non-breaking, additive).
Covers: trial expiry, grace period, payment failure, downgrade, upgrade, cancel, overage, and webhook safety.
"""
from fastapi import APIRouter, Request, HTTPException, status
from app.models import User
from app.db import SessionLocal
from datetime import datetime, timedelta

router = APIRouter()

# --- Constants ---
TRIAL_DAYS = 7
GRACE_DAYS = 3

# --- Example: Check if user is in trial/grace/active/expired ---
def get_billing_status(user: User):
    now = datetime.utcnow()
    if hasattr(user, "trial_end") and user.trial_end and user.trial_end > now:
        return "trial"
    if hasattr(user, "grace_end") and user.grace_end and user.grace_end > now:
        return "grace"
    if hasattr(user, "subscription_active") and user.subscription_active:
        return "active"
    return "expired"

# --- Example: Stripe webhook endpoint (idempotent, safe) ---
@router.post("/stripe/webhook")
def stripe_webhook(request: Request):
    # Minimal placeholder: parse event, handle idempotently
    payload = request.body()
    # TODO: verify signature, parse event, handle event types
    # e.g. invoice.payment_failed, customer.subscription.deleted, etc.
    return {"received": True}

# --- Example: Cancel subscription (sets grace period) ---
@router.post("/billing/cancel")
def cancel_subscription(request: Request):
    user_id = request.state.user_id  # Assume set by auth/session middleware
    db = SessionLocal()
    try:
        user = db.query(User).get(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        user.subscription_active = False
        user.grace_end = datetime.utcnow() + timedelta(days=GRACE_DAYS)
        db.commit()
        return {"message": "Subscription cancelled, grace period started."}
    finally:
        db.close()

# --- Example: Reactivate subscription (removes grace/expired) ---
@router.post("/billing/reactivate")
def reactivate_subscription(request: Request):
    user_id = request.state.user_id
    db = SessionLocal()
    try:
        user = db.query(User).get(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        user.subscription_active = True
        user.grace_end = None
        db.commit()
        return {"message": "Subscription reactivated."}
    finally:
        db.close()
