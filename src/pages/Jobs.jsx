import React, { useContext } from 'react'
// import useFetch from '../customHook/useFetch';
import JobCard from '../components/JobCard/JobCard';
import UserContext from '../UserContext';

const styles = {
  maindiv: {
    display: "grid",
    'grid-template-columns': 'repeat(3, auto)',
    'justify-content': 'center',
    padding: '70px 10px',
    gap: '10px',
    'background-image': "linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))",
   
    
  }
}

export default function Jobs() {
  const {data, deleteElement, appliedJobs} = useContext(UserContext)
  return (
    <div style={styles.maindiv}>
      {
        data && data.map(job => (
          <JobCard  key={job.id} job = {job} deleteElement = {deleteElement} appliedJobs = {appliedJobs} />
        ))
      }
    </div>
  )
}
