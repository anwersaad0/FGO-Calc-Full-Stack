from flask import Blueprint, jsonify, request
from app.models import Reply

reply_routes = Blueprint('replies', __name__)

#PUT and DELETE routes to be added later