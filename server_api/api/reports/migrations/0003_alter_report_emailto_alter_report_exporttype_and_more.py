# Generated by Django 4.1.2 on 2022-10-22 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0002_rename_email_to_report_emailto_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='emailTo',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='report',
            name='exportType',
            field=models.CharField(default='none', max_length=25),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='report',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
