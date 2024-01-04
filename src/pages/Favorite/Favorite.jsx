import React, { useContext } from 'react'
import './Favorite.css'
import UserContext from '../../UserContext'
import FavoriteJobCard from '../../components/FavoriteJobCard/FavoriteJobCard'

export default function Favorite() {
  const {totalFavorite} = useContext(UserContext)
  // console.log(totalFavorite)
  return (
    <div style={{marginTop: '100px'}}>
      {
            totalFavorite.map(favorite => <FavoriteJobCard key={favorite.id} favorite={favorite} /> )
      }
    </div>
  )
}
