from rest_framework import serializers

from user.models import User

from company.api.serializers import CompanySerializer
from doc.api.serializers import DocSerializer

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = "__all__"

class UserDetailsSerializer(serializers.ModelSerializer):
  companies = CompanySerializer(many=True, read_only=True)
  company = CompanySerializer(many=False, read_only=True)
  docs = DocSerializer(many=True, read_only=True)

  class Meta:
    model = User
    fields = [
      'id_user',
      'email',
      'email_verified',
      'password',
      'last_password_redefinition_at',
      'created_at',
      'last_updated_at',
      'companies',
      'company',
      'docs'
    ]
  # company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company', blank=False, null=False)
  # companies = models.ManyToManyField(Company, related_name="users")