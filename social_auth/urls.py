from django.urls import path
from .views import GenericAPIView

urlpatterns = [
    path('google/', GenericAPIView.as_view(), name='google'),
    
]