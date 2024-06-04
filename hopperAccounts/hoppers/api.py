from .models import AddHistory, RemovalHistory
from .serializers import AddHistorySerializer, RemovalHistorySerializer
from rest_framework import viewsets, permissions

class AddHistoryViewSet(viewsets.ModelViewSet):
    queryset = AddHistory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AddHistorySerializer

class RemovalHistoryViewSet(viewsets.ModelViewSet):
    queryset = RemovalHistory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RemovalHistorySerializer
