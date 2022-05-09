from django.db import models

from company.models import Company
from user.models import User

class Doc(models.Model):
  id_doc = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255, blank=True, null=True)
  deleted = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  last_updated_at = models.DateTimeField(auto_now = True)
  date_limit_to_sign = models.DateTimeField(auto_now_add=True)
  signed = models.BooleanField(default=False)
  company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company', blank=False, null=False)
  created_by = models.OneToOneField(User, on_delete=models.CASCADE, null=False)

# Um Doc deve ter:
# * nome (string limite de 255 caracteres)
# * deletado (boolean)
# * data de criação (Datetime)
# * data da última atualização (Datetime)
# * data limite para assinar (Datetime)
# * assinado (boolean)
# * company associada
# * usuário que criou o documento
