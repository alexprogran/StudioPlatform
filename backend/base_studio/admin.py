from django.contrib import admin
from base_studio.models import FormLogin
from .models import SchedulingModel


@admin.register(FormLogin)
class FormLoginAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('name', 'email', 'phone')
    list_per_page = 10
    list_max_show_all = 100
    
   
@admin.register(SchedulingModel)
class ShedulingAdmin(admin.ModelAdmin):
    list_display = ('date', 'time', 'professional', 'service' )
    search_fields = ('date',)
    list_filter = ('date',)
  
    
    

