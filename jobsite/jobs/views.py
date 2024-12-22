from rest_framework import viewsets
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer
from django.http import JsonResponse


def job_detail(request, job_id):
    try:
        job = Job.objects.get(job_id=job_id)
        data = {
            "id": job.id,
            "job_id": job.job_id,
            "title": job.title,
            "company_name": job.company_name,
            "location": job.location,
            "summary": job.summary,
            "employment_type": job.employment_type,
            "posted_date": job.posted_date,
            "salary": job.salary,
            "company_logo_url": job.company_logo_url,
            "details_page_url": job.details_page_url,
            "is_remote": job.is_remote
        }
        return JsonResponse(data)
    except Job.DoesNotExist:
        return JsonResponse({"error": "Job not found"}, status=404)
    
    
class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    
    
    