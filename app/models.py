from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    is_admin = Column(Integer, default=0)  # 1 for admin, 0 for normal user
    trial_end = Column(DateTime, nullable=True)
    grace_end = Column(DateTime, nullable=True)
    subscription_active = Column(Integer, default=1)  # 1=active, 0=inactive
    created_at = Column(DateTime, server_default=func.now())

class Image(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    file_url = Column(String, nullable=False)
    status = Column(String, default="uploaded")
    created_at = Column(DateTime, server_default=func.now())

class Video(Base):
    __tablename__ = "videos"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    file_url = Column(String, nullable=False)
    status = Column(String, default="uploaded")
    created_at = Column(DateTime, server_default=func.now())

class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(String)
    platform = Column(String)
    status = Column(String, default="pending")
    scheduled_time = Column(DateTime)
    created_at = Column(DateTime, server_default=func.now())

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True)
    type = Column(String)
    status = Column(String, default="pending")
    payload = Column(JSON)
    created_at = Column(DateTime, server_default=func.now())
