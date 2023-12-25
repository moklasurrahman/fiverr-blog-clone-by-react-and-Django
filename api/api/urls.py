from django.urls import path
from django.urls import path


from .import  views


urlpatterns = [
    path('', views.members, name='members'),
    path('blogs/', views.blog_list),
    path('blogs/<slug>/', views.blog_detail, name='blog-detail'), 
    path('category_filter/', views.category_filter, name='category-filter'),
    path('search/', views.search_api, name='search-api'),

    path('categories/', views.category_list, name='category-list-api'),
    path('business_posters/', views.business_poster_list, name='business_poster_list'),
]