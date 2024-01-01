
import { useEffect, useState } from 'react';
import './App.css'
import MainLayOut from './MainLayOut/MainLayOut'
import UserContext from './UserContext'
import useFetch from './customHook/useFetch';

function App() {
  const {data,loading, error } = useFetch("http://localhost:9000/jobs")
  // const [jobs, setJobs] = useState(data || []);
 
  const [jobs, setJobs] = useState([]);

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

  const value = {
    data: jobs,
    deleteElement
  }
  return (
    <UserContext.Provider value={value}>
      <MainLayOut />
    </UserContext.Provider>
  )
}

export default App
