from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import User, Media, db

from ..api.aws_media_helpers import get_unique_media_filename, upload_file_to_s3
from sqlalchemy import select

media_routes = Blueprint('media', __name__)

@media_routes.route('/')
def all_media():
    media_all = Media.query.all()
    return {'media': [media.to_dict() for media in media_all]}

@media_routes.route('/<int:id>')
def get_media(id):
    media = Media.query.get(id)
    return media.to_dict()

@media_routes.route('/<ip_name>')
def get_media_by_ip(ip_name):
    ip_media = Media.query.filter(Media.ip == ip_name)
    return {'ip_media': [media.to_dict() for media in ip_media]}

#WIP Post request for media
@media_routes.route('/media/new', methods=['POST'])
@login_required
def add_item():
    return True