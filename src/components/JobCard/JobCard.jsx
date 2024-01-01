import React from "react";
import "./JobCard.css";

export default function JobCard({ job, deleteElement }) {
  return (
    <div className="job-card">

      <div className="card-inner">
        <div className="card-img">
          <img src={job.logo} alt="" />
        </div>
       
        <div className="apply-btn">
          <button>Apply Now</button>
        </div>
      </div>
      <h2 className="company-title">{job.companyName}</h2>
      <div className="company-details">
        <p>{job.title}</p>
        <p>Position: {job.position}</p>
      </div>
      <p>
          <i>Job posted {job.jobpost} days age</i>
        </p>

        <div className="delete-edit-section">
        <button onClick={()=> deleteElement(job.id) } >Delete</button>
        <button  >Edit</button>
      </div>

      
    </div>
  );
}
