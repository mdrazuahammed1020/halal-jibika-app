import React, { useContext } from 'react'
import './Favorite.css'
import UserContext from '../../UserContext'
import FavoriteJobCard from '../../components/FavoriteJobCard/FavoriteJobCard'

export default function Favorite() {
  const {totalFavorite, removeFavoriteJob} = useContext(UserContext)
  // console.log(totalFavorite)
  return (
    <div className='favorite-wrapper'>
      {
        totalFavorite.length === 0 ? <p className='no-jobs'>No Favorite Jobs!!!!</p>: (
          <div style={{marginTop: '100px'}}>
      {
            totalFavorite.map(favorite => <FavoriteJobCard key={favorite.id} favorite={favorite} removeFavoriteJob={removeFavoriteJob} /> )
      }
    </div>
        )
      }
    </div>
  )
}
