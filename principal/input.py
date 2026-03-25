from django import forms
from datetime import date
class InputDia(forms.Form):
    dia_Escolhido = forms.forms.DateField(label="dia escolhido", initial=date.today())

class InputHorario(forms.Form):
    dia_Escolhido = forms.forms.DateField(label="dia escolhido", initial=date.today())
