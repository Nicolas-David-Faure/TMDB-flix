import React, { useEffect , useState } from 'react'
//redux
import { useDispatch } from 'react-redux'

//router
import { useLocation, useNavigate } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/searchFilms.scss'
//icons
import searchIcon from '../../assets/icons/search.svg'
import { setFilmsFounded } from '../../store/slice/filmsSlice/filmsSlice'

const SearchFilms = () => {
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
