from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.

class Catagory(models.Model):
    name = models.CharField(max_length=250)
    img = models.ImageField(blank=True, null=True, upload_to="catagory_Img")
    slug = models.SlugField(blank=True, null=True, unique=True)
    def __str__(self):
        return self.name

class Blog_tag(models.Model):
    tag_name = models.CharField(max_length=250)
    slug = models.SlugField(blank=True, null=True, unique=True)

    def __str__(self):
        return self.tag_name


class Blog(models.Model):
    category = models.ForeignKey(Catagory, on_delete=models.CASCADE)
    blog_tag = models.ForeignKey(Blog_tag, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    slug = models.SlugField(blank=True, null=True, unique=True)
    author = models.CharField(max_length=30)
    date = models.DateField(blank=True, null=True)
    img = models.ImageField(blank=True, null=True, upload_to="blog_Img")
    description = RichTextField()

    metaKeyword = models.TextField(blank=True, null=True)
    metaDescription = models.TextField(blank=True, null=True)
    
  
# metakeyword text fild
# metadis

    def __str__(self):
        return self.title
    


class Business_poster(models.Model):
     img = models.ImageField(blank=True, null=True, upload_to="blog_Img")
     title = models.TextField(blank=True, null=True, max_length=100)
     btnText = models.TextField(blank=True, null=True, max_length=100)
     text = models.TextField(blank=True, null=True, max_length=50)


    