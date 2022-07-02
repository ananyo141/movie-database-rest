from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('add/', views.addData),
    path('<str:pk>/', views.getDataUser),
]
