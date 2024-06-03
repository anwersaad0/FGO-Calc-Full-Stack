from app.models import db, Media, environment, SCHEMA
from sqlalchemy.sql import text

def seed_media():
    example = Media(
        name="example media", 
        type="video", 
        ip="example ip", 
        desc="example desciption", 
        url="https://brainfreezerrr-media.s3.amazonaws.com/2389e59295c7495d881cecbe1af4d580.mp4", 
        creator_id=1
    )

    db.session.add(example)
    db.session.commit()


def undo_media():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.media RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM media"))
        
    db.session.commit()