from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.models import Movie
from .serializers import MovieSerializer

@api_view(['GET'])
def getData(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addData(request):
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
