from rest_framework import routers
from .api import AddHistoryViewSet, RemovalHistoryViewSet

router = routers.DefaultRouter()
router.register('api/AddHistory', AddHistoryViewSet, 'AddHistory')
router.register('api/RemovalHistory', RemovalHistoryViewSet, 'RemovalHistory')

urlpatterns = router.urls
