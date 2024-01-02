import React from "react";
import {FaHeart} from 'react-icons/fa'
import "./JobCard.css";

export default function JobCard({ job, deleteElement, appliedJobs }) {
  return (
    <div className="job-card">

      <div className="card-inner">
        <div className="card-img">
          <img src={job.logo} alt="" />
        </div>
       
        <div className="apply-btn">
          <button style={{backgroundColor: job.applied ? "#E5E1DA" : "#2A5992" }} onClick={()=> appliedJobs(job.id)} disabled={job.applied} >{job.applied ? "Applied" : "Apply Now"}</button>
        </div>
      </div>
      <h2 className="company-title">{job.companyName}</h2>
      <div className="company-details">
        <p>{job.title}</p>
        <p>Position: {job.position}</p>
      </div>
      <p>
          <i>Job posted {job.jobpost} days ago</i>
        </p>

        <div className="delete-edit-section">
       <div>
       <button onClick={()=> deleteElement(job.id) } >Delete</button>
        <button  >Edit</button>
       </div>
       <div className="favorite-btn">
        
          <span> <FaHeart /> </span>
        </div>
      </div>

      
    </div>
  );
}


