# Generated by Django 5.1.7 on 2025-03-26 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base_studio', '0006_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShedulingModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('professional', models.CharField(max_length=100)),
                ('service', models.CharField(max_length=100)),
            ],
        ),
    ]
