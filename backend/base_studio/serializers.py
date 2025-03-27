from rest_framework import serializers
from .models import FormLogin, SchedulingModel

class FormLoginSerialzers(serializers.ModelSerializer):
    class Meta:
        model = FormLogin
        fields = ['name', 'email', 'phone']


class SchedulingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model  = SchedulingModel
        fields = ['date', 'time', 'professional', 'service' ]


