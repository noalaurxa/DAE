from django.db import models
from quiz.models import Exam

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    description = models.TextField(blank=True, verbose_name="Descripción")
    icon = models.ImageField(upload_to='category_icons/', blank=True, null=True)
    exams = models.ManyToManyField(Exam, related_name='categories', blank=True)
    
    def __str__(self):
        return self.name
