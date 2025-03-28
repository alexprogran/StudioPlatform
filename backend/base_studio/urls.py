from rest_framework.routers import DefaultRouter
from django.urls import path ,include
from . import views

router = DefaultRouter()
router.register(r'scheduling',views.SchedulingViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.FormLoginAPIView.as_view(), name='login'),
    # path('scheduling/', views.SchedulingAPIView.as_view(), name='scheduling')
]

