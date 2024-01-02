import React from 'react'
import './ApplyCard.css'

export default function ApplyCard({job, removeAppliedJob}) {
  return (
    <div className='apply-job-card'>
        <div className='apply-job-card-inner' >
            <div className='img-card-apply'>
                <img src={job.logo} alt="" />
            </div>
            <h2>{job.companyName}</h2>
            <p>{job.position}</p>
            <div className='apply-job-remove-btn'>
                <button onClick={()=> removeAppliedJob(job.id)} >Remove</button>
            </div>
        </div>
    </div>
  )
}

