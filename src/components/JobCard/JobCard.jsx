import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./JobCard.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JobCard({
  job,
  deleteElement,
  appliedJobs,
  favoriteJobs,
}) {
  // const [editMode, setEditMode] = useState(false);
  // const [updatedJob, setUpdatedJob] = useState({ ...job });

  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`/edit/${job.id}`)
  };

  // const handleUpdate = async () => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:9000/jobs/${job.id}`,
  //       updatedJob
  //     );
    //   // Handle success: Update UI or show a success message
    //   console.log("Job updated:", response.data);
    //   setEditMode(false);
    // } catch (error) {
  //     // Handle error: Show error message or perform necessary actions
  //     console.error("Error updating job:", error);
  //   }
  // };



  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedJob({ ...updatedJob, [name]: value });
  // };

  return (
    <div className="job-card">
      <div className="card-inner">
        <div className="card-img">
          <img src={job.logo} alt="" />
        </div>

        <div className="apply-btn">
          <button
            style={{ backgroundColor: job.applied ? "#E5E1DA" : "#2A5992" }}
            onClick={() => appliedJobs(job.id)}
            disabled={job.applied}
          >
            {job.applied ? "Applied" : "Apply Now"}
          </button>
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
            <button onClick={() => deleteElement(job.id)}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
          <div className="favorite-btn">
            <span
              onClick={() => favoriteJobs(job.id)}
              style={{ color: job.addFavorite ? "red" : "black" }}
            >
              {" "}
              <FaHeart />{" "}
            </span>
          </div>
        </div>
  
    </div>
  );
}



// {


// }




{
  /* <div className="delete-edit-section">
       <div>
       <button onClick={()=> deleteElement(job.id) } >Delete</button>
        <button onClick={handleEdit} >Edit</button>
       </div>
       <div className="favorite-btn">
        
          <span onClick={()=> favoriteJobs(job.id)} style={{color: job.addFavorite ? 'red' : 'black'}} > <FaHeart /> </span>
        </div>
      </div> */
}
