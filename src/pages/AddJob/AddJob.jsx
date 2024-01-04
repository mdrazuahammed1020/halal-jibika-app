import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import './AddJob.css'
import axios from "axios";

export default function AddJob() {
  const [jobData, setJobData] = useState({
    id: '',
    title: '',
    logo: '',
    companyName: '',
    position: '',
    description: '',
    jobpost: Math.floor(Math.random() * 10 + 1)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };
  console.log(jobData)


  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:9000/jobs', jobData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        
        setJobData({
          id: '',
          title: '',
          logo: '',
          companyName: '',
          position: '',
          description: '',
          jobpost: Math.floor(Math.random() * 10 + 1),
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  }


  return (

    <form className='job-form' onSubmit={handleSubmit} >
      <input type="text" name='id' placeholder='Id' value={jobData.id} onChange={handleChange} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={jobData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="logo"
        placeholder="Logo URL"
        value={jobData.logo}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={jobData.companyName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={jobData.position}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={jobData.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Add Job</button>
    </form>
  )
}
