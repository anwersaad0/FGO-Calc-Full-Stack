from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

class NewPostLike(FlaskForm):
    reaction = StringField("Reaction", validators=[DataRequired()])