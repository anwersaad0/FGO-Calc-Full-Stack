from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.schema import ForeignKey

post_likes = db.Table(
    'post_like',
    db.Model.metadata,
    db.Column('user_id', db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column('post_id', db.ForeignKey(add_prefix_for_prod('forum_posts.id')), primary_key=True),
    #db.Column('reaction', db.String)
)

if environment == "production":
    post_likes.schema = SCHEMA