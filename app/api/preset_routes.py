from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Preset

preset_routes = Blueprint('presets', __name__)

#GET ROUTES
@preset_routes.route('/')
def all_presets():
    presets = Preset.query.all()
    return {'presets': [preset.to_dict() for preset in presets]}

@preset_routes.route('/current')
@login_required
def get_user_presets():
    presets = Preset.query.filter(Preset.user_id == current_user.id)
    return {'presets': [preset.to_dict() for preset in presets]}

@preset_routes.route('/<int:id>')
def get_preset(id):
    preset = Preset.query.get(id)
    return preset.to_dict()

#POST ROUTE
@preset_routes.route('/new', methods=['POST'])
@login_required
def create_preset():
    #need form class here
    return 'null'