import React, { useContext } from 'react'
// import useFetch from '../customHook/useFetch';
import JobCard from '../components/JobCard/JobCard';
import UserContext from '../UserContext';

const styles = {
  maindiv: {
    display: "grid",
    'grid-template-columns': 'repeat(3, auto)',
    'justify-content': 'center',
    padding: '10px',
    gap: '5px'
  }
}

export default function Jobs() {
  const {data, deleteElement} = useContext(UserContext)
  return (
    <div style={styles.maindiv}>
      {
        data && data.map(job => (
          <JobCard  key={job.id} job = {job} deleteElement = {deleteElement} />
        ))
      }
    </div>
  )
}
