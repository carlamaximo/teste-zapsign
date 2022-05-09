from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from user.api.serializers import UserSerializer, UserDetailsSerializer
from user.models import User

class UserViewSet(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()

  class Meta:
    managed = True
    db_table = 'user'

  @action(detail=True, methods=['get', 'put', 'post', 'delete', 'patch'])
  def detalhes(self, request, pk=None, *args, **kwargs):
    queryset = User.objects.filter(pk=pk)
    self.serializer_class = UserDetailsSerializer
    serializer = self.get_serializer(queryset, many=True)

    return Response(serializer.data)
