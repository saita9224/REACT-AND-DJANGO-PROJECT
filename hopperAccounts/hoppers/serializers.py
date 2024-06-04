from rest_framework import serializers
from .models import AddHistory, RemovalHistory

class AddHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = AddHistory
        fields = '__all__'

class RemovalHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = RemovalHistory
        fields = '__all__'
