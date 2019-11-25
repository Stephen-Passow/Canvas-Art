from django.contrib import admin
from .models import Category, Paintings, ArtistName

admin.site.register([Category, Paintings, ArtistName])
