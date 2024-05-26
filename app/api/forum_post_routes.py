from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import User, ForumPost

forum_post_routes = Blueprint('posts', __name__)

@forum_post_routes('/')
def all_posts():
    posts_all = ForumPost.query.all()
    return {'posts': [post.to_dict() for post in posts_all]}

@forum_post_routes('/<int:id>')
def get_post(id):
    post = ForumPost.query.get(id)
    return post.to_dict()

@forum_post_routes('/new', methods=["POST"])
@login_required
def create_post():

    #form



    return {'error': form.errors}