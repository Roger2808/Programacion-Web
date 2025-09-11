from django.db import models

class Author(models.Model):
    name = models.CharField()
    birthdate = models.DateField()

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField()
    published_year = models.IntegerField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)