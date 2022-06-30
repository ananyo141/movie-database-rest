from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Movie(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=100)
    director = models.CharField(max_length=100)
    year = models.IntegerField()

    is_watched = models.BooleanField(default=False)
    is_favourite = models.BooleanField(default=False)
    on_watchlist = models.BooleanField(default=False)

    def __str__(self):
        return self.name
