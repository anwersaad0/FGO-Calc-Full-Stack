from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

from app.models import ForumPost

class NewPost(FlaskForm):
    title = StringField("Post Title", validators=[DataRequired()])
    