import React, { useEffect, useState } from 'react'
import './EditPage.css'
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function EditPage() {
    // const jobId = match.params.jobId;
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
          // Handle success: You might want to redirect or show a success message
        } catch (error) {
          console.error("Error updating job:", error);
          // Handle error: Show an error message to the user
        }
      };
    
    
  return (
        <div>
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
            <button onClick={handleUpdate}>Save</button>
          </div>
        </form>
        )}
     </div>
         
  )
}
