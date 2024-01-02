from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.schema import ForeignKey

reply_likes = db.Table(
    'reply_like',
    db.Model.metadata,
    db.Column('user_id', db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column('reply_id', db.ForeignKey(add_prefix_for_prod('replies.id')), primary_key=True),
    db.Column('reaction', db.String)
)

if environment == "production":
    reply_likes.schema = SCHEMA