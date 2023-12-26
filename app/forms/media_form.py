from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

from app.models import media

class NewMedia(FlaskForm):
    name = StringField("Item Name", validators=[DataRequired()])
    type = StringField("Item Type", validators=[DataRequired()])
    desc = StringField("Item Type", validators=[DataRequired()])
    url = StringField("Item Type", validators=[DataRequired()])