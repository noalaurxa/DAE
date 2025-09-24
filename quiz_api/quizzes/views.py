from .models import Quiz
from .serializers import QuizSerializer
from rest_framework import viewsets

# Create your views here.
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    