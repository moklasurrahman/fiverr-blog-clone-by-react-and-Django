from django.contrib import admin

from .models import Catagory,Blog_tag,Blog,Business_poster

# Register your models here.

admin.site.register(Catagory)
admin.site.register(Blog_tag)
admin.site.register(Blog)
admin.site.register(Business_poster)