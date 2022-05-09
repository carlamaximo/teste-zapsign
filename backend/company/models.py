from django.db import models
from user.models import User
# class User:
#   def __init__(self, ref):
#     from user.models import User
#     assert isinstance(ref, User)
#     self.ref = ref

class Company(models.Model):
  LANG_CHOICES = (
        ("pt", "Português"),
        ("es", "Espanhol"),
        ("en", "Inglês")
    )

  id_company = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255, blank=False, null=False)
  created_at = models.DateTimeField(auto_now_add=True)
  last_update_at = models.DateTimeField(auto_now = True)
  locale = models.CharField(max_length=50)
  lang = models.CharField(max_length=2, choices=LANG_CHOICES, blank=False, null=False)
  users = models.ManyToManyField(User, related_name="companies")
  created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by', blank=False, null=False)
  # docs = models.ForeignKey(Docs, on_delete=models.CASCADE, related_name='docs', blank=False, null=False)

# Uma Company deve ter:
# * nome (string limite de 255 caracteres)
# * data de criação (Datetime)
# * data da última atualização (Datetime)
# * fuso horário (String limite de 50 caracteres)
# * linguagem (opções: pt, es ou en)
# * usuários convidados
# * usuário que criou
# * documentos associados

# auto_now = True (para definir o campo para a data atual toda vez que o modelo é salvo), auto_now_add (para definir a data em que o primeiro modelo foi criado) e default (para definir uma data padrão que pode ser substituída pelo usuário).