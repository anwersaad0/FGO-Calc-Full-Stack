from flask import Blueprint, jsonify
from app.models import Media

media_routes = Blueprint('media', __name__)

@media_routes.route('/')
def all_media():
    media_all = Media.query.all()
    return {'media': [media.to_dict() for media in media_all]}

@media_routes.route('/<int:id>')
def get_media(id):
    media = Media.query.get(id)
    return media.to_dict()