# Generated by Django 5.1 on 2024-09-24 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videoManager', '0006_videogenerationqueue_videoname'),
    ]

    operations = [
        migrations.AddField(
            model_name='videogenerationqueue',
            name='customURL',
            field=models.CharField(default=1, max_length=300),
            preserve_default=False,
        ),
    ]
