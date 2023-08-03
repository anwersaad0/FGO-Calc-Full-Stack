from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewPreset(FlaskForm):
    atk = IntegerField("Atk Stat:", validators=[DataRequired()])

    flat_atk = IntegerField("Flat Atk:", validators=[DataRequired()])
    atk_perc = IntegerField("Atk %:", validators=[DataRequired()])
    np_perc = IntegerField("NP %:", validators=[DataRequired()])
    def_perc = IntegerField("Def %:", validators=[DataRequired()])
    card_perc = IntegerField("Card %", validators=[DataRequired()])
    card_res = IntegerField("Card Res:", validators=[DataRequired()])
    trait_perc = IntegerField("Trait %", validators=[DataRequired()])
    np_trait = IntegerField("NP Trait:", validators=[DataRequired()])


    