from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import ShopItem

shop_item_routes = Blueprint('shop', __name__)

#GET ROUTES
@shop_item_routes.route('/')
def all_shop_items():
    shop_items = ShopItem.query.all()
    return {'shop': [shop_item.to_dict() for shop_item in shop_items]}

# @shop_item_routes.route('/current')
# @login_required
# def get_user_shop_items():
#     shop_items = .query.filter(Preset.user_id == current_user.id)
#     return {'shop_items': [shop_item.to_dict() for shop_item in shop_items]}

@shop_item_routes.route('/<int:id>')
def get_shop_item(id):
    shop_item = ShopItem.query.get(id)
    return shop_item.to_dict()

#POST ROUTE
@shop_item_routes.route('/new', methods=['POST'])
@login_required
def create_shop_item():
    #need form class here
    return 'null'