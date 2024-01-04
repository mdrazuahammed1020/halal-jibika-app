import React from 'react'
import './FavoriteJobCard.css'

export default function FavoriteJobCard({favorite, removeFavoriteJob}) {
  return (
    <div className='favorite-job-card'>
        <div className='favorite-job-card-inner' >
            <div className='img-card-favorite'>
                <img src={favorite.logo} alt="" />
            </div>
            <h2>{favorite.companyName}</h2>
            <p>{favorite.position}</p>
            <div className='favorite-job-remove-btn'>
                <button onClick={()=> removeFavoriteJob(favorite.id)}>Remove</button>
            </div>
        </div>
    </div>
  )
}
