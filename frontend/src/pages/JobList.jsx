import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-4">
          {jobs.map(job => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
      </div>
    );
  };

export default JobsList;