from rest_framework import viewsets

from company.api.serializers import CompanySerializer
from company.models import Company

class CompanyViewSet(viewsets.ModelViewSet):
  serializer_class = CompanySerializer
  queryset = Company.objects.all()

  class Meta:
    managed = True
    db_table = 'company'