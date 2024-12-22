from django.db import models

class Job(models.Model):
    job_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=200)
    company_name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    summary = models.TextField()
    employment_type = models.CharField(max_length=100)
    posted_date = models.DateTimeField()
    salary = models.CharField(max_length=100, null=True, blank=True)
    company_logo_url = models.URLField(max_length=500, null=True, blank=True)
    details_page_url = models.URLField(max_length=500)
    is_remote = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-posted_date']
    
    def __str__(self):
        return f"{self.title} at {self.company_name}"