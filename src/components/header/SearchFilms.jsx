import React, { useEffect , useRef, useState } from 'react'
//framer-motion
import { motion } from 'framer-motion'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { handleToogleDisplaySearch } from '../../store/slice/searchSlice' 
import { setFilmsFounded } from '../../store/slice/filmsSlice/filmsSlice'
//router
import { useLocation, useNavigate } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/searchFilms.scss'
//icons
import searchIcon from '../../assets/icons/search.svg'

const SearchFilms = () => {
  const {showInputSearch} = useSelector(store=>store.searchSlice)
 
  
  const {pathname} = useLocation();
  let type = pathname.split('/').at(-1)
  
  const navigate = useNavigate()                      //instance of useNaviagate
     //Context films
  const [ filmName , setFilmName ] = useState('');   

  const dispatch = useDispatch()

  const handleSubmit = async( event )=>{
    if ( event ) {                  
      event.preventDefault();
    }                  
    const result = await axios.get(`/api/${type}/search/${filmName}`).then(({data: {results}})=>results)
    dispatch(setFilmsFounded(result))  
  }

  const handleChange =( event )=>{
    const nameFilm = event.target.value
    setFilmName( nameFilm )  
    const toSearchOrBrowse = nameFilm !== '' ? `/search/${type}` : `/browse/${type}`;   //if value is empty then go to the browse else search 
    navigate(toSearchOrBrowse)
  }


  const handleActiveInput = () =>{
    dispatch(handleToogleDisplaySearch())
   
  }
  
  useEffect(() => {
    //if filmName change then send a get between 400ms to avoid to many gets   
    const delayTimeout = setTimeout(() =>filmName.trim() !== '' && handleSubmit(), 400);
    return () => clearTimeout( delayTimeout );
  }, [ filmName ]);


  const animateInput = {
    visible:{width:0, opacity:0 }

    ,
    hidden:{width:'auto', opacity:1},
  }
  return (
    <form onClick={(e)=>e.stopPropagation()} className='searchFilms__main' onSubmit={ handleSubmit }>
      <div>
            <motion.input
              initial='hidden'
              animate={!showInputSearch ? 'visible' : 'hidden'}
              variants={animateInput}
              type="text" 
              name="searchFilm" 
              value={ filmName } 
              onChange={ handleChange } /> 
         
              <img 
              onClick={handleActiveInput}
              src={ searchIcon } 
              alt="search film" />
        
      </div>
    </form>
  )
}

export default SearchFilms
