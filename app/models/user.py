from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from .media_like import media_likes
from .post_like import post_likes
from .reply_like import reply_likes

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    is_admin = db.Column(db.Boolean, default=False)

    posts = db.relationship('ForumPost', back_populates='user', cascade="all, delete-orphan")
    replies = db.relationship('Reply', back_populates='user', cascade="all, delete-orphan")

    likes_media = db.relationship('Media', secondary=media_likes, back_populates='likes')
    likes_post = db.relationship('ForumPost', secondary=post_likes, back_populates='likes')
    likes_reply = db.relationship('Reply', secondary=reply_likes, back_populates='likes')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
