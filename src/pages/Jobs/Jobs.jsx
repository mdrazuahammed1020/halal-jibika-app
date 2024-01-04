import React, { useContext } from 'react'
// import useFetch from '../customHook/useFetch';
import JobCard from '../../components/JobCard/JobCard';
import UserContext from '../../UserContext';
import './Jobs.css'



export default function Jobs() {
  const  {data, deleteElement, appliedJobs, favoriteJobs} = useContext(UserContext)
  return (
    <div className='jobs-container'>
      {
        data && data.map(job => (
          <JobCard  key={job.id} job = {job} deleteElement = {deleteElement} appliedJobs = {appliedJobs} favoriteJobs = {favoriteJobs} />
        ))
      }
    </div>
  )
}
