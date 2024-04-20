from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

from app.models import Media

def media_exists(form, field):
    new_media_name = field.data
    media = Media.query.filter(Media.name == new_media_name).first()
    if media:
        raise ValidationError("This media already exists!")
    
class EditMedia(FlaskForm):
    name = StringField("Media Name", validators=[DataRequired()])
    ip = StringField("Media IP", validators=[DataRequired()])
    desc = StringField("Media Type", validators=[DataRequired()])