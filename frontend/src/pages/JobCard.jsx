import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    return (
      <Link to={`/jobs/${job.job_id}`}>
      <Card className="mb-4 hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12">
                <img 
                  src={job.company_logo_url || "/api/placeholder/48/48"} 
                  alt={job.company_name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-600">{job.company_name}</p>
              </div>
            </div>
            <div className="text-right">
              {job.salary && (
                <p className="text-gray-900 font-medium">{job.salary}</p>
              )}
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
              {job.is_remote ? "Remote" : job.location}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
              {job.employment_type}
            </span>
          </div>
        </CardContent>
      </Card>

      </Link>
    );
  };

export default JobCard;