import React, { useEffect, useState } from 'react'
//axios
import axios from 'axios';
//styles
import './sass/addToFavorite.scss'
//icons
import plusIcon from '../assets/icons/plus.svg'
import checkIcon from '../assets/icons/check.svg'
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext';

const AddToFavorite = ({ film , user}) => {
  const [favorites, setFavorites ] = useState([])
  const filmInfo = {title:film.title, id:film.id}
  const isFavorite = favorites?.find(({id})=>id === film.id) ? checkIcon : plusIcon;
  

  const handleToggleIcon= async()=>{
    if(isFavorite === plusIcon){
      await axios.post(`/api/favorites/add/${user?.email}`, filmInfo)
            .then(({data: arrFavorites})=>setFavorites(arrFavorites))
    }
    if(isFavorite === checkIcon) {
       await axios.put(`/api/favorites/remove`,{...filmInfo, user_email: user.email})
              .then(({data: arrFavorites})=>setFavorites(arrFavorites))
    }
  }

  useEffect(()=>{
     axios.get(`/api/favorites/${user?.email}`)
      .then(({data:arrFavorites})=>setFavorites(arrFavorites))
      .catch(err=>console.error(err))
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
