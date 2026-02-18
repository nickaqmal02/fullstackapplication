
from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('api.urls'))                 #this is where we tell django that include all urls that are created in api application 
]
