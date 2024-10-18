from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

from app.models import Media

class EditPost(FlaskForm):
    text = StringField("Edit Text", validators=[DataRequired()])