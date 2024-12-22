import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import JobsList from "./JobList";


export default function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/jobs/?format=json')
      .then(res => res.json())
      .then(data => setJobs(data));

      console.log(jobs);
  }, []);

  return (
    <div>
      <JobsList jobs={jobs} />
    </div>
  );
}