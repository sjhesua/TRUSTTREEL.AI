# Generated by Django 5.1 on 2024-09-24 19:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('videoManager', '0007_videogenerationqueue_customurl'),
    ]

    operations = [
        migrations.RenameField(
            model_name='videogenerationqueue',
            old_name='customURL',
            new_name='customeURL',
        ),
    ]
