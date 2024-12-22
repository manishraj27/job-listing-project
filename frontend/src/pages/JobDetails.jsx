import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/jobs/${jobId}/`);
        if (!response.ok) {
          throw new Error('Job not found');
        }
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="space-y-4">
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Card className="bg-red-50">
          <CardContent className="p-4">
            <p className="text-red-600">Error: {error}</p>
            <Link to="/">
              <Button variant="outline" className="mt-4">
                Back to Jobs List
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!job) return null;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            ← Back to Jobs
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 flex-shrink-0">
              <img
                src={job.company_logo_url || "/api/placeholder/64/64"}
                alt={job.company_name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
              <p className="text-gray-600 text-lg">{job.company_name}</p>
            </div>
            <div className="flex-shrink-0">
              <Button onClick={() => window.open(job.details_page_url, '_blank')}>
                Apply Now
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="whitespace-pre-wrap">{job.summary}</p>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h3 className="font-medium">Job Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <Badge variant="secondary">
                        {job.is_remote ? 'Remote' : job.location}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Employment Type</p>
                      <Badge variant="secondary">{job.employment_type}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Posted Date</p>
                      <p>{new Date(job.posted_date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;