# Generated by Django 4.1.2 on 2022-10-22 14:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='report',
            old_name='email_to',
            new_name='emailTo',
        ),
        migrations.RenameField(
            model_name='report',
            old_name='export_time',
            new_name='exportTime',
        ),
        migrations.RenameField(
            model_name='report',
            old_name='export_type',
            new_name='exportType',
        ),
    ]
