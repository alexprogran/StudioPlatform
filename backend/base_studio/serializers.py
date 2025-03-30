from rest_framework import serializers
from .models import FormLogin, SchedulingModel

class FormLoginSerialzers(serializers.ModelSerializer):
    class Meta:
        model = FormLogin
        fields = ['id','name', 'email', 'phone']


class SchedulingSerializer(serializers.ModelSerializer):
    time = serializers.TimeField(format="%H:%M")
    date = serializers.DateField(format="%d/%m/%Y")
    class Meta:
        model  = SchedulingModel
        fields = [
            'id',
            'date',
            'time',
            'professional',
            'service',
            'confirm',
            'canceled',
            ]

