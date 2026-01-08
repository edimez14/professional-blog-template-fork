from django.contrib import admin
from .models import *

class CommentAdmin(admin.ModelAdmin):
    list_display = ("id", "content", "author", "father_article", "status", "publication_date", )
    list_display_links = ("id", "content", )
    list_per_page = 25
    
admin.site.register(Comment, CommentAdmin)
