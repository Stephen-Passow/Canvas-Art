from django.conf.urls import include
from django.urls import re_path
from rest_framework import  routers


from . import views


router = routers.DefaultRouter()
router.register('artist', views.ArtistNameView)
router.register('category', views.CategoryView)
router.register('painting', views.PaintingsView)


urlpatterns = [
    re_path('', include(router.urls))
]