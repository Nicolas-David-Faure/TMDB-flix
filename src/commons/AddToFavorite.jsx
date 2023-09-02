import React, { useEffect, useState } from 'react'
//redux
import { useSelector , useDispatch} from 'react-redux';
import { toggleThereWasChange } from '../store/slice/favoritesSlice';
//axios
import axios from 'axios';
//styles
import './sass/addToFavorite.scss'
//icons
import plusIcon from '../assets/icons/plus.svg'
import checkIcon from '../assets/icons/check.svg'



const AddToFavorite = ({ film  }) => {
  const { thereWasChange , personalAside , change } = useSelector(store=> store.favoritesSlice)
  const { userInfo } = useSelector(store=> store.userSlice)
  const [ favorites , setFavorites ] = useState([])
  const dispatch = useDispatch()
  const filmTitle = film?.title;
  const filmId = film?.id;
  const userEmail = userInfo.email
  const isFavorite = favorites?.find(({id})=>id === film?.id) ? checkIcon : plusIcon;
  
  const filmInfo ={  
    title: filmTitle , 
    id: filmId, 
    genre_ids: film?.genre_ids , 
    backdrop_path: film?.backdrop_path,
    overview:  film?.overview,
    original_title: film?.original_title,
    original_language: film?.original_language,
    popularity: film?.popularity,
    release_date: film?.release_date
  }

  const handleToggleIcon= async()=>{
    if(isFavorite === plusIcon){
      await axios.post(`/api/favorites/add/${ userEmail }`, filmInfo)
            .then(({data: arrFavorites})=>{setFavorites(arrFavorites)})
      }

    if(isFavorite === checkIcon) {
       await axios.put(`/api/favorites/remove`,{...filmInfo, user_email: userEmail})
              .then(({data: arrFavorites})=>{setFavorites(arrFavorites)})
    }

  if(personalAside){
          dispatch(toggleThereWasChange(true))
    }
  }

  useEffect(()=>{
     axios.get(`/api/favorites/${userEmail}`)
      .then(({data:arrFavorites})=>{setFavorites(arrFavorites)})
      .catch(err=>err)
      .finally(()=>{
      })
  },[change])

  return (
    <div onClick={handleToggleIcon} className='addToFavorite__main'>
      <img className='addToFavorite__main_icon' src={isFavorite} alt={isFavorite === plusIcon ? 'add to favorite' : 'remove to favorite'} />
    </div>
  )
}

export default AddToFavorite
