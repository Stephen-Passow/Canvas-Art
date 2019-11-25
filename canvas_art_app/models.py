from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, default='N/A')

    def __str__(self):
        return self.name


class Paintings(models.Model):
    name = models.CharField(max_length=100, default='N/A')
    description = models.CharField(max_length=100, default='N/A')
    image = models.CharField(max_length=255, default='N/A')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='paintings')

    def __str__(self):
        return self.name


class ArtistName(models.Model):
    name = models.CharField(max_length=100, default='N/A')
    photo_url = models.CharField(max_length=255, default='N/A')
    email = models.CharField(max_length=100, default='N/A')
    about_me = models.CharField(max_length=100, default='N/A')

    def __str__(self):
        return self.name

