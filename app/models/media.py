from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.schema import ForeignKey

from .media_like import media_likes

class Media(db.Model):
    __tablename__ = "media"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(10), nullable=False)
    ip = db.Column(db.String(50), nullable=False)
    desc = db.Column(db.String, nullable=False)
    url = db.Column(db.String, nullable=False)

    creator_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))

    creator = db.relationship('User', back_populates='content')
    likes = db.relationship('User', secondary=media_likes, back_populates='likes_media')

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'ip': self.ip,
            'desc': self.desc,
            'url': self.url,

            'creatorId': self.creator_id
        }

        return data