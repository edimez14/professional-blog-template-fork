from django.contrib import admin
from .models import *

class BlogAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "author", "publication_date",)
    list_display_links = ("title",)
    list_per_page = 25
    
admin.site.register(Article, BlogAdmin)

