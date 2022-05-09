from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from company.api.viewsets import CompanyViewSet
from user.api.viewsets import UserViewSet
from doc.api.viewsets import DocViewSet


route = routers.DefaultRouter()

route.register(r'users', UserViewSet)
route.register(r'companies', CompanyViewSet)
route.register(r'docs', DocViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls))
]
