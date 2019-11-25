from rest_framework import serializers

from .models import Category, ArtistName, Paintings


class PaintingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paintings
        fields = ('name', 'description', 'image', 'category')


class CategorySerializer(serializers.ModelSerializer):
    paintings = PaintingsSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('name', 'paintings')


class ArtistNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtistName
        fields = ('name', 'photo_url', 'email', 'about_me')