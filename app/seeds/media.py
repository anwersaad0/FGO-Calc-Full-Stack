from app.models import db, Media, environment, SCHEMA
from sqlalchemy.sql import text

def seed_media():
    example = Media(
        name="example media", type="comic", ip="example ip", desc="example desciption", url="", creator_id=1
    )

    db.session.add(example)
    db.session.commit()


def undo_media():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.media RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM media"))
        
    db.session.commit()