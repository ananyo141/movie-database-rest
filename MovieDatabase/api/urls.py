from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('<str:pk>/', views.getDataUser),
    path('add/', views.addData),
]
