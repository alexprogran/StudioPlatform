from django.db import models

class FormLogin(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)  

    def __str__(self):
        return self.name


class SchedulingModel(models.Model):

    date = models.DateField()
    time = models.TimeField()
    professional = models.CharField(max_length=100)
    service = models.CharField(max_length=100)

    def __str__(self):
        return self.service