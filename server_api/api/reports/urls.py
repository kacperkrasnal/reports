from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import reports_list

urlpatterns = [
    path('reports/', reports_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)
