import React, { useEffect, useState } from 'react'
//redux
import { useSelector , useDispatch} from 'react-redux'
import { togglePersonalAside , toggleThereWasChange , toggleChange} from '../../../store/slice/favoritesSlice'
import { setFilmsDescription } from '../../../store/slice/infoDescription/infoDescriptionSlice'
//styles
import './scss/asidePersonalFavorites.scss'
//axios
import axios from 'axios'
//commons
import AddToFavorite from '../../../commons/AddToFavorite'
//icons
import refreshIcon from '../../../assets/icons/refresh.svg'
import arrowDonwIcon from '../../../assets/icons/arrowDown.svg'
import playIcon from '../../../assets/icons/play.svg'
const AsidePersonalFavorites = () => {
  const { personalAside , thereWasChange, change } = useSelector(store => store.favoritesSlice)

  const { userInfo } = useSelector(store => store.userSlice)
  const [ favorites , setFavorites ] = useState(null)
  const dispatch = useDispatch()
  

  const handleClosePersonalAside = (e) =>{
    dispatch(togglePersonalAside())
    document.body.style.overflow = 'auto';
  }
  const handleWasChange =()=>{
    dispatch(toggleThereWasChange(false))
    dispatch(toggleChange())
  }

  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    axios.get(`/api/favorites/${userInfo.email}`)
     .then(({data:arrFavorites})=>{setFavorites(arrFavorites)})
     .catch(err=>err)
     .finally(()=>{
     })
  },[change])
  
  return (
    <div onClick={handleClosePersonalAside} className='asidePersonalFavorites__main'>
      <aside onClick={(e)=>e.stopPropagation()}>
        <div className='asidePersonalFavorites__cont_title'>
          <div className='asidePersonalFavorites__cont_title2'>
            <h2>Tus Peliculas Favoritas</h2>
            {thereWasChange && 
            <button 
            onClick={handleWasChange} 
            className='asidePersonalFavorites__btn_save'>
              <img src={refreshIcon} alt="refresh list" />
            </button>}
          </div>
        </div>
        <ul>
            {
              favorites?.map((( fav )=><ListOfFavorite key={fav.id} fav={fav}/>))
            }
        </ul>
      </aside>
    </div>
  )
}

const ListOfFavorite = ( { fav } )=>{
  const { title , backdrop_path , genres } = fav;
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const dispatch = useDispatch()
  const BACKGROUND_URL = IMAGE_PATH + backdrop_path
  

  let lengthTitle = fav?.title.split(' ').length
  return (
    <li >
      <figure>
        <img src={BACKGROUND_URL} alt="" />

        <figcaption>
          <div>
            <AddToFavorite film={fav}/>

            <div className='listOfFavorite__play' onClick={()=>alert('reproduciendo..')}>{/*set film to a global state context to use on infoDescription.jsx*/}
              <img src={playIcon} alt="description" />
            </div>

          <div className='listOfFavorite__show_description' onClick={()=>dispatch(setFilmsDescription(fav))}>{/*set film to a global state context to use on infoDescription.jsx*/}
            <img src={arrowDonwIcon} alt="description" />
          </div> 
          </div>
          <h2 style={lengthTitle >= 4 ? {fontSize: '1.2rem' , lineHeight:'2rem'}: {fontSize: '1.9rem'} }>{fav.title}</h2>
        </figcaption>
      </figure>
    </li>
  )
}

export default AsidePersonalFavorites
