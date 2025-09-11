from django.db import models

class Author(models.Model):
    name = models.CharField()
    birthdate = models.DateField()

    def __str__(self):
        return self.name
