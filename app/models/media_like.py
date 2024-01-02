from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.schema import ForeignKey

media_likes = db.Table(
    'media_like',
    db.Model.metadata,
    db.Column('user_id', db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column('media_id', db.ForeignKey(add_prefix_for_prod('media.id')), primary_key=True),
    db.Column('reaction', db.String)
)

if environment == "production":
    media_likes.schema = SCHEMA