import React, { useEffect, useState } from 'react'
import './EditPage.css'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


export default function EditPage() {
    // const jobId = match.params.jobId;
    const navigate = useNavigate();

    const {jobId} = useParams()
    const [jobData, setJobData] = useState(null);
    const [updatedJob, setUpdatedJob] = useState(null);

    
    useEffect(() => {
        const fetchJobData = async () => {
          try {
            const response = await axios.get(`http://localhost:9000/jobs/${jobId}`);
            setJobData(response.data);
            setUpdatedJob(response.data)
          } catch (error) {
            console.error("Error fetching job data:", error);
          }
        };
    
        fetchJobData();
      }, [jobId]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedJob({ ...updatedJob, [name]: value });
      };
    
      const handleUpdate = async () => {
        try {
          const response = await axios.put(`http://localhost:9000/jobs/${jobId}`, updatedJob);
          console.log("Job updated:", response.data);
          navigate('/')
        } catch (error) {
          console.error("Error updating job:", error);
        }
      };
  return (
        <div>
            <div className="back-prev-state-info">
            <button onClick={()=> navigate(-1)} >Home</button>
            <h2 className='job-edit-title'>Update job info</h2>
            </div>
        {
            jobData && (
            <form>
            <div className="edit-form">
            <input
              type="text"
              name="title"
              value={updatedJob.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="logo"
              placeholder="Logo URL"
              value={updatedJob.logo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={updatedJob.companyName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={updatedJob.position}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={updatedJob.description}
              onChange={handleChange}
              required
            ></textarea>
            <button onClick={handleUpdate} >Save</button>
          </div>
        </form>
        )}
     </div>
         
  )
}
