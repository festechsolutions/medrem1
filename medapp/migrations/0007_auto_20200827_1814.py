# Generated by Django 3.1 on 2020-08-27 12:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medapp', '0006_meddata_course'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meddata',
            name='evng_med',
        ),
        migrations.RemoveField(
            model_name='meddata',
            name='noon_med',
        ),
    ]
