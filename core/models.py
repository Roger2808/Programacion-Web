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

class Chapter(models.Model):
    title = models.CharField(max_length=200)
    number = models.IntegerField()
    book = models.ForeignKey(Book, on_delete=models.CASCADE)

class Page(models.Model):
    number = models.IntegerField()
    content = models.TextField()
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
