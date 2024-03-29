from flask import Blueprint, jsonify, request
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

@media_routes.route('/<ip_name>')
def get_media_by_ip(ip_name):
    ip_media = Media.query.filter(Media.ip == ip_name)
    return {'ip_media': [media.to_dict() for media in ip_media]}