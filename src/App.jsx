
import { useEffect, useState } from 'react';
import './App.css'
import MainLayOut from './MainLayOut/MainLayOut'
import UserContext from './UserContext'
import useFetch from './customHook/useFetch';

function App() {
  const {data,loading, error } = useFetch("http://localhost:9000/jobs")
 
  const [jobs, setJobs] = useState([]);
  const [totalAppliedJob, setTotalAppliedJob] = useState([]);


  useEffect(() => {
    if (data) {
      setJobs(data);
    }
  }, [data]);

  const deleteElement = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/jobs/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const updatedJobs = jobs.filter(job => job.id !== id);
        setJobs(updatedJobs);
      } else {
        // Handle error if deletion fails
        console.error('Failed to delete job');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  }

  // let totalAppliedJob =  [];

  function appliedJobs(id) {

    const updatedJobs = jobs.map((job) =>
    job.id === id ? { ...job, applied: true } : job
    );
    setJobs(updatedJobs);

    let appliedJob = jobs.find(job => job.id === id)
    setTotalAppliedJob(prevJob => [...prevJob, appliedJob])
  }

  function removeAppliedJob(id){
    let removerJobItems =  totalAppliedJob.filter(job => job.id !== id );
    setTotalAppliedJob(removerJobItems) 
    console.log('hi')
  }


  // console.log(totalAppliedJob)
  const value = {
    data: jobs,
    deleteElement,
    appliedJobs,
    totalAppliedJob,
    removeAppliedJob
  }

  return (
    <UserContext.Provider value={value}>
      <MainLayOut />
    </UserContext.Provider>
  )
}

export default App
