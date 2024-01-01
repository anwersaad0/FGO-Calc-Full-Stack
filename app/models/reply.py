from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.schema import ForeignKey

class Reply(db.Model):
    __tablename__ = "replies"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    text = db.Column(db.String(), nullable=False)
    likes = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))
    post_id = db.Column(db.integer, ForeignKey(add_prefix_for_prod('forum_posts')))

    user = db.relationship('User', back_populates='replies')
    post = db.relationship('ForumPost', back_populates='replies')

    def to_dict(self):
        data = {
            'id': self.id,
            'title': self.title,
            'text': self.text,
            'likes': self.likes
        }

        return data