import React, { useEffect, useState } from 'react'
//redux
import { useSelector , useDispatch} from 'react-redux'
import { togglePersonalAside , toggleThereWasChange , toggleChange} from '../../../store/slice/favoritesSlice'
import { setFilmsDescription } from '../../../store/slice/infoDescription/infoDescriptionSlice'
//styles
import './scss/asidePersonalFavorites.scss'
//framer motion
import { motion } from 'framer-motion'
//axios
import axios from 'axios'
//commons
import AddToFavorite from '../../../commons/AddToFavorite'
//icons
import refreshIcon from '../../../assets/icons/refresh.svg'
import arrowDonwIcon from '../../../assets/icons/arrowDown.svg'
import playIcon from '../../../assets/icons/play.svg'
import doubleArrowDownIcon from '../../../assets/icons/arrowDoubleDown.svg'

const AsidePersonalFavorites = () => {
  const { personalAside , thereWasChange, change } = useSelector(store => store.favoritesSlice)
  const { userInfo } = useSelector(store => store.userSlice)
  const [ favorites , setFavorites ] = useState(null)
  const [ switcherFavorites , setSwitcherFavorites ] = useState(false)
  const [ titleFavotites , setTitleFavorites ] = useState({title:'Tus Películas Favoritas',switcher: 'Tus TvShows Favoritos', is:'movie'})
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
    axios.get(`/api/favorites/${ titleFavotites.is }/${userInfo.email}`)
    .then(({data:arrFavorites})=>{setFavorites(arrFavorites)})
    .catch(err=>err)
    .finally(()=>{
    })
  },[change, titleFavotites.is])
  
  const handleSwitchFavorites = (e) =>{
    
    const name = e.target.name

    if(name){
      setSwitcherFavorites(prev=>!prev)
    }else{

      setSwitcherFavorites(prev=>!prev)

      if(titleFavotites.title == 'Tus Películas Favoritas'){
        setTimeout(()=>{
          setTitleFavorites({title:'Tus TvShows Favoritos',switcher: 'Tus Películas Favoritas', is:'tv'})
        },200 )
      }else{
        setTimeout(()=>{
          setTitleFavorites({title:'Tus Películas Favoritas',switcher: 'Tus TvShows Favoritos', is:'movie'})
        },200)
      }
    }
  }

  const switcherAnimationVariants = {
    on:{
        display:'flex', 
        top: [50,80],
        zIndex:53,
        backgroundColor:'rgba(209, 26, 26 , 1)',
        scale: 1,
        color:'rgba(230, 249, 249, 0.9)'
    },
    initial:{
      top: [80, 20 ],
      zIndex:[53, 0 , -1],
      backgroundColor: 'rgba(209, 26, 26 , 0)',
      scale: 0.8,
      display: ['flex','none' ],
      color:'rgba(238, 39, 39, 0)'
    },
    
  }
  return (
    <div onClick={handleClosePersonalAside} className='asidePersonalFavorites__main'>
      <aside onClick={(e)=>e.stopPropagation()}>
        <div className='asidePersonalFavorites__cont_title'>
          <TitleType
          title={titleFavotites} 
          thereWasChange={thereWasChange} 
          handleSwitchFavorites={handleSwitchFavorites} 
          handleWasChange={handleWasChange}/>


          <motion.div
          layout
          initial={'initial'}
          animate={switcherFavorites ? 'on' : 'initial'}
          variants={switcherAnimationVariants}
          onClick={handleSwitchFavorites}
          className='asidePersonalFavorites__cont_switch'>
            

            <motion.h2
            key={213456567}
            layout
            initial={'initial'}
            animate={switcherFavorites ? 'on' : 'initial'}
            variants={switcherAnimationVariants} 
            >{titleFavotites.switcher}</motion.h2>
          </motion.div>
        </div>


        <ul>
            {
              favorites?.map((( fav )=><ListOfFavorite is={titleFavotites.is} key={fav.id} fav={fav}/>))
            }
        </ul>
      </aside>
    </div>
  )
}

const TitleType =({title , handleSwitchFavorites  , handleWasChange , thereWasChange})=>{

  return(
    <>
    <div className='asidePersonalFavorites__cont_title2'>
            <h2>{title.title}</h2>

            <button
            onClick={handleSwitchFavorites} 
            className='asidePersonalFavorites__btn_switch'
            >
              <img name='button' src={doubleArrowDownIcon} alt="moreOptions" />
            </button>
            {thereWasChange && 
            <button 
            onClick={handleWasChange} 
            className='asidePersonalFavorites__btn_save'>
              <img src={refreshIcon} alt="refresh list" />
            </button>}
          </div>
    </>
  )
}

const ListOfFavorite = ( { fav , is } )=>{
  const { title , backdrop_path , genres } = fav;
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const dispatch = useDispatch()
  const BACKGROUND_URL = IMAGE_PATH + backdrop_path
  
  let titleOrName = is == 'movie' ? 'title' : 'name'

  let lengthTitle = fav?.[titleOrName]?.split(' ').length
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
          <h2 style={lengthTitle >= 4 ? {fontSize: '1.2rem' , lineHeight:'2rem'}: {fontSize: '1.9rem'} }>{fav[titleOrName]}</h2>
        </figcaption>
      </figure>
    </li>
  )
}

export default AsidePersonalFavorites
