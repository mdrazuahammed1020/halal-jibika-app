import React from "react";
import "./Home.css";
import useFetch from "../../customHook/useFetch";
import JobCard from "../../components/JobCard/JobCard";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const { data, loading, error } = useFetch();

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }
  const filterRecentJobs = data.filter(job => job.jobpost < 6).slice(0, 5).sort((a, b) => a.jobpost - b.jobpost)

  console.log(filterRecentJobs)

  return (
    <div className="home-section-outer">

    <div className="home-section">
      <div style={{ height: "100%" }} 
      className="home-content">
        <h1>
          Keep hardworking,
          <br /> take patients <br /> and make yourself <br />
          always ready for jobs.
        </h1>
        <button onClick={()=> navigate('/signup')} className="home-btn">Explore Now</button>
      </div>

      {/* <div className="home-img"></div> */}
    </div>

    <div className="home-section-jobs">
      <h3>Recents Jobs</h3>
      <div className="home-section-inner">
      {
        filterRecentJobs && filterRecentJobs.map(job => (
          <JobCard  key={job.id} job = {job} />
        ))
      }

      </div>
      <div className="see-jobs-btn">
        <button onClick={()=> navigate('/jobs')} >Explore All Jobs</button>
      </div>
    </div>

    </div>

  );
}
