from flask import Blueprint, jsonify
from app.models import Servant

servant_routes = Blueprint('servants', __name__)

@servant_routes.route('/')
def all_servants():
    servants = Servant.query.all()
    return {'servants': [servant.to_dict() for servant in servants]}

@servant_routes.route('/<int:id>')
def get_servant(id):
    servant = Servant.query.get(id)
    return servant.to_dict()