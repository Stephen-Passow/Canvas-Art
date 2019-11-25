from rest_framework import viewsets

from .serializers import CategorySerializer, ArtistNameSerializer, PaintingsSerializer
from .models import ArtistName, Paintings, Category


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ArtistNameView(viewsets.ModelViewSet):
    queryset = ArtistName.objects.all()
    serializer_class = ArtistNameSerializer


class PaintingsView(viewsets.ModelViewSet):
    queryset = Paintings.objects.all()
    serializer_class = PaintingsSerializer
