from django.db import models
# from company.models import Company

class User(models.Model):
  id_user = models.AutoField(primary_key=True)
  email = models.EmailField(max_length=255, blank=False, null=False)
  email_verified = models.BooleanField(default=False)
  password = models.CharField(max_length=255)
  last_password_redefinition_at = models.DateTimeField(auto_now = True)
  created_at = models.DateTimeField(auto_now_add=True)
  last_updated_at = models.DateTimeField(auto_now = True)
  # company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company', blank=False, null=False)
  # docs
  class Meta:
    managed = True
    unique_together = ('password', 'last_password_redefinition_at')
  # ver como deixar o created_at estatico e p updated_at mudando conforme atualiza

  # Quando a model de company estiver pronta, importar!

  # para companies e docs será necessario fazer serializer de detalhes

# * email (string limite de 255 caracteres)
# * data da última redefinição de senha (datetime)
# * email verificado (boolean)
# * senha (string limite de 255 caracteres)
# * data de criação (datetime)
# * data da última atualização (datetime)
# * companhias associadas
# * companhia original
# * documentos associados