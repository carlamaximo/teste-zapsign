from rest_framework import viewsets

from doc.api.serializers import DocSerializer
from doc.models import Doc

class DocViewSet(viewsets.ModelViewSet):
  serializer_class = DocSerializer
  queryset = Doc.objects.all()

  class Meta:
    managed = True
    db_table = 'doc'