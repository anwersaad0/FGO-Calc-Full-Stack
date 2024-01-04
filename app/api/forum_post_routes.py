from flask import Blueprint, request
from app.models import ForumPost

forum_post_routes = Blueprint('posts', __name__)

@forum_post_routes('/')
def all_posts():
    posts_all = ForumPost.query.all()
    return {'posts': [post.to_dict() for post in posts_all]}

@forum_post_routes('/<int:id>')
def get_post(id):
    post = ForumPost.query.get(id)
    return post.to_dict()