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

# class MovieMetric(models.Model):
#     class Meta:
#         db_table = 'movie_metric'
#     is_watched   = models.BooleanField(default=False)
#     is_favourite = models.BooleanField(default=False)
#     on_watchlist  = models.BooleanField(default=False)

#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_movie_metric')
#     movie = models.ForeignKey(Movie, on_delete=models.SET_NULL, null=True, related_name='movie_metric')
#     updated = models.DateTimeField(auto_now=True)
#     created = models.DateTimeField(auto_now_add=True)

#     def save(self, *args, **kw):
#         " Overload the save method to validate "
#         super(MovieMetric, self).save(*args, **kw)
