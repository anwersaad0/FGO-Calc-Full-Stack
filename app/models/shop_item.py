from .db import db, environment, SCHEMA

class ShopItem(db.Model):
    __tablename__ = "shop_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)

    #quantity = db.Column(db.Integer)

    def to_dict(self):
        data = {
            'id': self.id,
        }