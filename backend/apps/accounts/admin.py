from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "role", "is_active",)
    list_display_links = ("username", "email",)
    list_filter = ("role", "is_active",)
    search_fields = ("username", "email",)
    list_per_page = 25
    
admin.site.register(User, UserAdmin)