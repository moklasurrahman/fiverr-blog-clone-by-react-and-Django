from django.shortcuts import render
from django.http import HttpResponse


from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Blog, Catagory, Business_poster
from .serializers import BlogSerializer,CatagorySerializer, BusinessPosterSerializer





from django.db.models import Q



# Create your views here.


def members(request):
    return HttpResponse("Hello world!")




@api_view(['GET'])
def blog_list(request):
    queryset = Blog.objects.all()
    serializer = BlogSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def blog_detail(request, slug):
    try:
        blog = Blog.objects.get(slug=slug)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found"}, status=404)

    serializer = BlogSerializer(blog)
    return Response(serializer.data)


@api_view(['GET'])
def category_filter(request):
    category_slug = request.query_params.get('category_slug')
    if category_slug:
        blogs = Blog.objects.filter(category__slug=category_slug)
    else:
        blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)




@api_view(['GET'])
def search_api(request):
    search_term = request.query_params.get('q', '')
    print(search_term)
    if not search_term:
        return Response([])  # Return an empty list if search term is not provided

    # Use Q objects to perform a case-insensitive search on multiple fields
    blog_results = Blog.objects.filter(
        Q(title__icontains=search_term) | 
        Q(description__icontains=search_term) | 
        Q(author__icontains=search_term)
    )

    serializer = BlogSerializer(blog_results, many=True)
    return Response(serializer.data)




@api_view(['GET'])
def category_list(request):
    categories = Catagory.objects.all()
    serializer = CatagorySerializer(categories, many=True)
    return Response(serializer.data)




@api_view(['GET'])
def business_poster_list(request):
    business_posters = Business_poster.objects.all()
    serializer = BusinessPosterSerializer(business_posters, many=True)
    return Response(serializer.data)





