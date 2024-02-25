from django.db import models
from django.contrib.auth.models import User

class Review(models.Model):
	title = models.CharField(max_length=255)
	content = models.TextField()
	stars = models.IntegerField()
	user = models.ForeignKey(User, on_delete=models.CASCADE)


class Category(models.Model):
	name = models.CharField(max_length=255)
	ordinal = models.IntegerField()

# TODO add Business class