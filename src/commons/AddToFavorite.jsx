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
  const userEmail = userInfo.email
  const isFavorite = favorites?.find(({id})=>id === film?.id) ? checkIcon : plusIcon;
  let isMovieOrTv;
  if(film){
    isMovieOrTv = Object.keys(film).includes('name') ? 'tv' : 'movie';
  }
  let MovieOrTvInfo ={
                    tv:{
                      first_air_date : film?.first_air_date,   
                      name: film?.name,
                      id: film?.id,
                      origin_country : film?.origin_country,
                      backdrop_path: film?.backdrop_path,
                      original_language: film?.original_language,
                      original_name: film?.original_name,
                      popularity: film?.popularity,
                      overview: film?.overview,
                      poster_path: film?.poster_path,
                      vote_average: film?.vote_average,
                      vote_count: film?.vote_count,
                      genre_ids: film?.genre_ids
                    },

                    movie :{  
                        title: film?.title , 
                        id: film?.id, 
                        genre_ids: film?.genre_ids , 
                        backdrop_path: film?.backdrop_path,
                        overview:  film?.overview,
                        original_title: film?.original_title,
                        original_language: film?.original_language,
                        popularity: film?.popularity,
                        release_date: film?.release_date
                        }
                }

  const handleToggleIcon = async()=>{
    if(isFavorite === plusIcon){
    
      await axios.post(`/api/favorites/${isMovieOrTv}/add/${ userEmail }`, MovieOrTvInfo[isMovieOrTv])
            .then(({data: arrFavorites})=>{setFavorites(arrFavorites)})
      }

    if(isFavorite === checkIcon) {
       await axios.put(`/api/favorites/${ isMovieOrTv }/remove`,{...MovieOrTvInfo[isMovieOrTv], user_email: userEmail})
              .then(({data: arrFavorites})=>{setFavorites(arrFavorites)})
    }

    if(personalAside){
            dispatch(toggleThereWasChange(true))
      }
  }

  useEffect(()=>{
     axios.get(`/api/favorites/${isMovieOrTv}/${userEmail}`)
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
