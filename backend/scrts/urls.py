from django.urls import path
from .views import HideSecret, RevealSecret

urlpatterns = [
    path('hide/', HideSecret.as_view(), name='hide'),
    path('reveal/', RevealSecret.as_view(), name='reveal'),
]
