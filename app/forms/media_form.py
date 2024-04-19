from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

from app.models import Media
from app.api.aws_media_helpers import ALLOWED_MEDIA_EXTENSIONS

def media_exists(form, field):
    new_media_name = field.data
    media = Media.query.filter(Media.name == new_media_name).first()
    if media:
        raise ValidationError("This media already exists!")

class NewMedia(FlaskForm):
    name = StringField("Item Name", validators=[DataRequired()])
    type = StringField("Item Type", validators=[DataRequired()])
    desc = StringField("Item Type", validators=[DataRequired()])
    url = StringField("Item Type", validators=[DataRequired()])