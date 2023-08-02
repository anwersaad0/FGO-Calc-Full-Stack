from .db import db, environment, SCHEMA

class Servant(db.Model):
    __tablename__ = "servants"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    servant_class = db.Column(db.String(15), nullable=False)
    card = db.Column(db.String(10), nullable=False)
    target = db.Column(db.String(5), nullable=False)
    atk_stat = db.Column(db.Integer, nullable=False)

    portrait = db.Column(db.String, nullable=False)

    presets = db.relationship('Preset', back_populates='servant')

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'class': self.servant_class,
            'card': self.card,
            'target': self.target,
            'atkStat': self.atk_stat,
            'portrait': self.portrait
        }

        return data