from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import User, Media, db
from app.forms import NewMedia, EditMedia

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
@media_routes.route('/new', methods=['POST'])
@login_required
def add_item():
    #print("------TESTING CCC-------", current_user.clearance)

    # if current_user.clearance is not 'Admin':
    #     return {"error": "Insufficient Clearance."}

    form = NewMedia()

    form['csrf_token'].data = request.cookies['csrf_token']

    #print("-------TESTING BBB-------")

    #likely error with bucket

    if form.validate_on_submit():
        #print("-------TESTING AAA-------")

        media_file = form.data['url']
        media_file.filename = get_unique_media_filename(media_file.filename)
        media_file_upload = upload_file_to_s3(media_file)

        media = Media(name = form.data['name'],
                      type = form.data['type'],
                      ip = form.data['ip'],
                      desc = form.data['desc'],
                      url = media_file_upload['url'],
                      creator_id = current_user.id,
                      )
        
        db.session.add(media)
        db.session.commit()
        return media.to_dict()
    
    return {"errors": form.errors}

@media_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit_media(id):
    if current_user.clearance is not 'Admin':
        return {"error": "Insufficient Clearance."}
    
    media = Media.query.get(id)

    if not media:
        return {"error": "Media not found!"}
    
    form = EditMedia()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        media.name = form.data['name']
        media.ip = form.data['ip']
        media.desc = form.data['desc']

        db.session.commit()
        return media.to_dict()
    
    return {"errors": form.errors}

#reminder to rework to further accommodate for user clearance
@media_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_media(id):
    if current_user.clearance is not 'Admin':
        return {"error": "Insufficient Clearance."}
    
    media = Media.query.get(id)
    if media.creator_id == current_user.id:
        db.session.delete(media)
        db.session.commit()
        return "Media successfully removed!"
    else:
        return "Must be the respective creator to delete this media"