from rest_framework import serializers

from doc.models import Doc

class DocSerializer(serializers.ModelSerializer):
  class Meta:
    model = Doc
    fields = "__all__"