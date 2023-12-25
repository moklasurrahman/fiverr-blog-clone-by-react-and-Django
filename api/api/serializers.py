from rest_framework import serializers
from .models import *




class CatagorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Catagory
        fields = '__all__'


class BlogTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog_tag
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    category = CatagorySerializer()
    blog_tag = BlogTagSerializer()

    class Meta:
        model = Blog
        fields = '__all__'



class BusinessPosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business_poster
        fields = '__all__'
