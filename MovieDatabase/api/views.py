from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.models import Movie, User
from .serializers import MovieSerializer

@api_view(['GET'])
def getData(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDataUser(request, pk):
    userid = User.objects.get(username=pk)
    movies = userid.movie_set.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addData(request):
    user = User.objects.get_or_create(username=request.data['user-input'])[0]

    Movie.objects.create(user=user, name=request.data['favourites'], director=request.data['watched'], year=3232)
    #, year=request.data['year'],
    # is_watched=, is_favourite=, on_watchlist=)

    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(request.data)
