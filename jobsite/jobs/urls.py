from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet
from . import views

router = DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  
    path('jobs/<str:job_id>/', views.job_detail),
]
