import React, { useEffect, useState } from 'react'
//axios
import axios from 'axios';
//styles
import './sass/addToFavorite.scss'
//icons
import plusIcon from '../assets/icons/plus.svg'
import checkIcon from '../assets/icons/check.svg'

const AddToFavorite = ({ film , user }) => {
  const [ favorites , setFavorites ] = useState([])

  const filmTitle = film?.title;
  const filmId = film?.id;
  const userEmail = film?.email

  const filmInfo = { title: filmTitle , id: filmId }

  const isFavorite = favorites?.find(({id})=>id === film?.id) ? checkIcon : plusIcon;
  
  const handleToggleIcon= async()=>{
    if(isFavorite === plusIcon){
      await axios.post(`/api/favorites/add/${ user?.email }`, filmInfo)
            .then(({data: arrFavorites})=>{setFavorites(arrFavorites)})
    }
    if(isFavorite === checkIcon) {
       await axios.put(`/api/favorites/remove`,{...filmInfo, user_email: user?.email})
              .then(({data: arrFavorites})=>{setFavorites(arrFavorites)})
    }
  }

  useEffect(()=>{
     axios.get(`/api/favorites/${user?.email}`)
      .then(({data:arrFavorites})=>{setFavorites(arrFavorites)})
      .catch(err=>err)
      .finally(()=>{
      })
  },[])

  return (
    <div onClick={handleToggleIcon} className='addToFavorite__main'>
      <img className='addToFavorite__main_icon' src={isFavorite} alt={isFavorite === plusIcon ? 'add to favorite' : 'remove to favorite'} />
    </div>
  )
}

export default AddToFavorite
