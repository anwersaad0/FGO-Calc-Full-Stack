from .db import db, environment, SCHEMA

class ForumPost(db.Model):
    __tablename__ = "forum_posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    text = db.Column(db.String(), nullable=False)