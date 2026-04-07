import os
import redis
import json

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
r = redis.Redis.from_url(REDIS_URL)

def set_session(key, value, ttl=21600):
    r.setex(key, ttl, json.dumps(value))

def get_session(key):
    val = r.get(key)
    return json.loads(val) if val else None
