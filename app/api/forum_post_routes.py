from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import User, ForumPost, post_likes, db
from app.forms import NewPost, EditPost

from sqlalchemy import select

forum_post_routes = Blueprint('posts', __name__)

@forum_post_routes.route('/')
def all_posts():
    posts_all = ForumPost.query.all()
    return {'posts': [post.to_dict() for post in posts_all]}

@forum_post_routes.route('/<int:id>')
def get_post(id):
    post = ForumPost.query.get(id)
    return post.to_dict()

@forum_post_routes.route('/<int:id>/likes/<int:user_id>', methods=['POST'])
@login_required
def like_post(id, user_id):
    post = ForumPost.query.get(id)
    if not post:
        return {'error': 'post not found'}
    
    user = User.query.get(user_id)
    if not user:
        return {'error': 'user not found'}
    
    query = select([post_likes]).where(
        (post_likes.c.user_id == user_id) & (post_likes.c.post_id == id)
    )

    res = db.session.execute(query)

    in_likes = res.fetchone() is not None

    if in_likes:
        user.likes_post.remove(post)
        db.session.commit()
        return post.to_dict()
    else:
        user.likes_post.add(post)
        db.session.commit()
        return post.to_dict()

@forum_post_routes.route('/new', methods=["POST"])
@login_required
def create_post():

    form = NewPost()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = ForumPost(title = form.data['title'],
                         text = form.data['text'],
                         user_id = current_user.id,
                         )
        
        db.session.add(post)
        db.session.commit()
        return post.to_dict()

    return {'error': form.errors}

@forum_post_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    post = ForumPost.query.get(id)

    if not post:
        return {"error": "Post not found!"}
    
    form = EditPost()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post.text = form.data['text']

        db.session.commit()
        return post.to_dict()
    
    return {"errors": post.errors}

@forum_post_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = ForumPost.query.get(id)

    if post.user_id == current_user.id:
        db.session.delete(post)
        db.session.commit()
        return "Your post was successfully removed!"
    else:
        return "Must be the post's creator to delete it!"