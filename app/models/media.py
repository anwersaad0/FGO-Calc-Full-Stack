from .db import db, environment, SCHEMA

class Media(db.Model):
    __tablename__ = "media"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(10), nullable=False)
    desc = db.Column(db.String, nullable=False)
    url = db.Column(db.String)

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'desc': self.desc,
            'url': self.url
        }