from django.db import models


class Report(models.Model):
    """
    Class representing the report.
    Null values set due to lack of client-side form validation.
    """
    name = models.CharField(max_length=100)
    format = models.CharField(max_length=15)
    emailTo = models.CharField(max_length=100)
    exportType = models.CharField(max_length=25)
    exportTime = models.CharField(max_length=100, null=True, blank=True)


