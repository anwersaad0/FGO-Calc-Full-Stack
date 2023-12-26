from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired, ValidationError

from app.models import ShopItem

def item_exists(form, field):
    new_item_name = field.data
    item = ShopItem.query.filter(ShopItem.name == new_item_name).first()
    if item:
        raise ValidationError("This item already exists!")

class NewItem(FlaskForm):
    name = StringField("Item Name", validators=[DataRequired()])
    price = FloatField("Item Price", validators=[DataRequired()])
    #insert something for the image here when possible