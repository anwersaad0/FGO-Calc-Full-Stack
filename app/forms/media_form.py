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
    name = StringField("Media Name", validators=[DataRequired()])
    type = StringField("Media Type", validators=[DataRequired()])
    ip = StringField("Media IP", validators=[DataRequired()])
    desc = StringField("Media Type", validators=[DataRequired()])
    url = FileField("Media File", validators=[FileRequired(), FileAllowed(list(ALLOWED_MEDIA_EXTENSIONS))])
    