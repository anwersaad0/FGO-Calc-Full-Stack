from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.schema import ForeignKey

class Preset(db.Model):
    __tablename__ = "presets"
    
    if environment == "production":
        __table_args__ = {"schema": SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    atk = db.Column(db.Integer, nullable=False)
    flat_atk = db.Column(db.Integer, nullable=False)
    atk_perc = db.Column(db.Integer, nullable=False)
    np_perc = db.Column(db.Integer, nullable=False)
    def_perc = db.Column(db.Integer, nullable=False)
    card_perc = db.Column(db.Integer, nullable=False)
    trait_perc = db.Column(db.Integer, nullable=False)
    card_res = db.Column(db.Integer, nullable=False)
    np_trait = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('users.id')))
    servant_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod('servants.id')))

    user = db.relationship('User', back_populates='presets')
    servant = db.relationship('Servant', back_populates='presets')

    def to_dict(self):
        data = {
            'id': self.id,
            'atk': self.atk,
            'flatAtk': self.flat_atk,
            'atkPerc': self.atk_perc,
            'npPerc': self.np_perc,
            'defPerc': self.def_perc,
            'cardPerc': self.card_perc,
            'cardRes': self.card_res,
            'traitPerc': self.trait_perc,
            'npTrait': self.np_trait
        }

        return data
    