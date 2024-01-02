import React, { useContext } from 'react'
import UserContext from '../UserContext'
import ApplyCard from '../components/ApplyCard/ApplyCard'
import JobCard from '../components/JobCard/JobCard'

export default function AppliedJob() {

  const {totalAppliedJob, removeAppliedJob} = useContext(UserContext)
  return (
    <div style={{padding: '10px'}} className='apply-card-section'>
      {
        totalAppliedJob.length === 0 ? (<p style={{height: '600px', textAlign: 'center', fontSize: '90px', lineHeight: '500px','font-family': 'Poppins', color: '#92C7CF'
      }} >No applied jobs yet.</p>) : 
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

