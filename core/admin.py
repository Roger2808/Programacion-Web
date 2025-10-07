from django.contrib import admin
from .models import Author, Book, Chapter, Page

admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Chapter)
admin.site.register(Page)
