from flask import Blueprint, request
from flask_login import current_user, login_required

post_like_routes = Blueprint('post_likes', __name__)