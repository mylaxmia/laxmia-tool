"""
Centralized logging and Sentry integration for production monitoring.
Minimal, non-breaking, additive.
"""
import logging
import os

SENTRY_DSN = os.getenv("SENTRY_DSN", None)

# --- Logging setup ---
LOG_FILE = os.getenv("LOG_FILE", "app.log")
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")

logging.basicConfig(
    level=LOG_LEVEL,
    format="%(asctime)s %(levelname)s %(name)s %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, mode="a", encoding="utf-8"),
        logging.StreamHandler(),
    ],
)

logger = logging.getLogger("mediaapp")

# --- Sentry integration (optional) ---
try:
    import sentry_sdk
    if SENTRY_DSN:
        sentry_sdk.init(dsn=SENTRY_DSN, traces_sample_rate=0.1)
        logger.info("Sentry initialized.")
except ImportError:
    logger.warning("sentry_sdk not installed; Sentry disabled.")

# --- Log rotation (basic) ---
try:
    from logging.handlers import RotatingFileHandler
    file_handler = RotatingFileHandler(LOG_FILE, maxBytes=5*1024*1024, backupCount=3)
    file_handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(name)s %(message)s"))
    logger.addHandler(file_handler)
except Exception as e:
    logger.warning(f"Log rotation not enabled: {e}")
