import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';

export default function AddJob() {
  const [jobData, setJobData] = useState({
    id: '',
    title: '',
    logo: '',
    companyName: '',
    position: '',
    description: '',
    jobpost: '7',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  // function handleSubmit(e){
  //   e.preventDefault();
  // }
  return (
    <form>
      <input type="text" name='id' placeholder='Id' value={jobData.id} onChange={handleChange} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={jobData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="logo"
        placeholder="Logo URL"
        value={jobData.logo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={jobData.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={jobData.position}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={jobData.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}
