import React, { useEffect, useState } from 'react'
//router
import { useLocation, useNavigate , useMatches} from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/searchFilms.scss'
//icons
import searchIcon from '../../assets/icons/search.svg'
import { useInfoFilmsContext } from '../../context/InfoFilmsContext'

const SearchFilms = () => {
  const navigate = useNavigate()                      //instance of useNaviagate
  const { setFilmsSerched } = useInfoFilmsContext()    //Context films
  const [filmName, setFilmName] = useState('');   

  const handleSubmit = async(e)=>{
    if (e) {                  //If there are an event so e.preventDefault()
      e.preventDefault();
    }                   //get films from api/movie/search/${filmName}
    const {data: {results : films}} = await axios.get(`/api/movie/search/${filmName}`)   
    setFilmsSerched(films)  
  }

  const handleChange =(e)=>{
    const value = e.target.value
    setFilmName(value)  //set film name  
    
    const path = value !== '' ? '/search' : '/browse'; 
                          //if value is empty then go to the browse else search 
    navigate(path)
  }
  

  useEffect(() => {

    //if filmName change then send a get between 400ms to avoid to many gets   
    const delayTimeout = setTimeout(() => {
      if (filmName.trim() !== '') {
        handleSubmit();
      }
    }, 400);

    return () => clearTimeout(delayTimeout); //clear the timeout
  }, [filmName]);

  return (
    <form className='searchFilms__main' onSubmit={handleSubmit}>
      <div>
        <input type="text" name="searchFilm" value={filmName} onChange={handleChange} />
          <button  onChange={handleChange} type="submit" >
            <img src={searchIcon} alt="search film" />
          </button>
      </div>
    </form>
  )
}

export default SearchFilms
