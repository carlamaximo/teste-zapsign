# Generated by Django 4.0.4 on 2022-05-07 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doc', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doc',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
