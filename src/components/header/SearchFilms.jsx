import React, { useEffect , useState } from 'react'
//router
import { useNavigate } from 'react-router-dom'
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
  const [ filmName , setFilmName ] = useState('');   

  const handleSubmit = async( event )=>{
    if ( event ) {                  
      event.preventDefault();
    }                  
    const {data: {results : films}} = await axios.get(`/api/movie/search/${filmName}`)   
    setFilmsSerched(films)  
  }

  const handleChange =( event )=>{
    const nameFilm = event.target.value

    setFilmName( nameFilm )  
    
    const toSearchOrBrowse = nameFilm !== '' ? '/search' : '/browse';   //if value is empty then go to the browse else search 
    
    navigate(toSearchOrBrowse)
  }

  useEffect(() => {
    //if filmName change then send a get between 400ms to avoid to many gets   
    const delayTimeout = setTimeout(() =>filmName.trim() !== '' && handleSubmit(), 400);
    return () => clearTimeout( delayTimeout );
  }, [ filmName ]);

  return (
    <form className='searchFilms__main' onSubmit={ handleSubmit }>
      <div>
        <input type="text" name="searchFilm" value={ filmName } onChange={ handleChange } />
          <button  onChange={ handleChange } type="submit" >
            <img src={ searchIcon } alt="search film" />
          </button>
      </div>
    </form>
  )
}

export default SearchFilms
