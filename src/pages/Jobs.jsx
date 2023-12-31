import React from 'react'
import useFetch from '../customHook/useFetch';
import JobCard from '../components/JobCard/JobCard';

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
  const { data, loading, error } = useFetch();

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }
  return (
    <div style={styles.maindiv}>
      {
        data && data.map(job => (
          <JobCard  key={job.id} job = {job} />
        ))
      }
    </div>
  )
}
