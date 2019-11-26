from rest_framework import serializers

from .models import Category, ArtistName, Paintings


class PaintingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paintings
        fields = ('id', 'name', 'description', 'image', 'category')


class CategorySerializer(serializers.ModelSerializer):
    paintings = PaintingsSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'paintings')


class ArtistNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtistName
        fields = ('id', 'name', 'photo_url', 'email', 'about_me')