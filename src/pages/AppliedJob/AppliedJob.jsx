import React, { useContext } from 'react'
import UserContext from '../../UserContext'
import ApplyCard from '../../components/ApplyCard/ApplyCard'
// import JobCard from '../../components/JobCard/JobCard'
import './AppliedJob.css'

export default function AppliedJob() {

  const {totalAppliedJob, removeAppliedJob} = useContext(UserContext)
  return (
    <div style={{padding: '10px', marginTop: '100px'}} className='apply-card-section'>
      {
        totalAppliedJob.length === 0 ? (<p className='conditional-p'>No applied jobs yet.</p>) : 
        (
          <div>

            {
              totalAppliedJob.map((job) => <ApplyCard key={job.id} job = {job} removeAppliedJob={removeAppliedJob} />)
            }
          </div>
        )
      }
    </div>
  )
}

