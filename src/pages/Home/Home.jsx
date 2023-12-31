// import React, { useState } from "react";
import "./Home.css";
// import JobCard from "../../components/JobCard/JobCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../UserContext";
import JobCard from "../../components/JobCard/JobCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../authentication/firebase.config";

export default function Home() {
  const [user] = useAuthState(auth);
  const {data, deleteElement, appliedJobs, favoriteJobs} = useContext(UserContext);
  const navigate = useNavigate()
  function homeButtonNavgation(){
    if(!user){
      navigate('/signup')
    }else navigate('/jobs')
  }
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
        <button onClick={homeButtonNavgation} className="home-btn">Explore Now</button>
      </div>

      {/* <div className="home-img"> <img src="../../assets/interview.png" alt="" /> </div> */}
    </div>

    <div className="home-section-jobs">
      <h3>Recents Jobs</h3>
      <div className="home-section-inner">
        {
          data && data.filter(job => job.jobpost < 5).sort((a, b)=> a.jobpost - b.jobpost).slice(0, 5).map(job => <JobCard key={job.id} job = {job} deleteElement={deleteElement} appliedJobs = {appliedJobs} favoriteJobs={favoriteJobs} /> )
        }
      </div>
      <div className="see-jobs-btn">
        <button onClick={()=> navigate('/jobs')} >Explore All Jobs</button>
      </div>
    </div>

    </div>

  );
}


 