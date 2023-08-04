from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Preset, Servant, User, db
from app.forms import NewPreset

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
def create_preset(id):
    servant = Servant.query.get(id)

    form = NewPreset()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        preset = Preset(
            atk = form.data['atk'],
            np_mult = form.data['npMult'],
            flat_atk = form.data['flatAtk'],
            atk_perc = form.data['atkPerc'],
            np_perc = form.data['npPerc'],
            def_perc = form.data['defPerc'],
            card_perc = form.data['cardPerc'],
            card_res = form.data['cardRes'],
            trait_perc = form.data['traitPerc'],
            np_trait = form.data['npTrait'],
            affinity = form.data['affinity'],
            mes_mod = form.data['mesMod'],
            user_id = current_user.id,
            servant_id = servant.id
        )

        db.session.add(preset)
        db.session.commit()
        return preset.to_dict()
    
    return {"errors": form.errors}