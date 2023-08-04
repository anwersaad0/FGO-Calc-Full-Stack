from app.models import db, Servant, environment, SCHEMA
from sqlalchemy.sql import text

def seed_servants():
    demo = Servant(
        name="Servant Example",
        servant_class="Saber",
        card="Buster",
        target="AoE",
        atk_stat=10000,
        portrait="nopicture.none"
    )

    db.session.add(demo)
    db.session.commit()

def undo_servants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.servants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM servants"))
    
    db.session.commit()