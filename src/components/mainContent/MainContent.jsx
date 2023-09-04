import React, { useEffect, useState } from 'react'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { setUserInfo } from '../../store/slice/userSlice/userSlice'
//axios
import axios from 'axios'
//styles
import './sass/mainContent.scss'
//components
import AsidePersonalFavorites from './user/AsidePersonalFavorites'
import Start  from './Start'
import Movies from './movies/Movies'
//
const MainContent = () => {
  //const [userLogged, setLoginUser] = useState(null)
  const favoritesSlice = useSelector(store=> store.favoritesSlice)
  const user = useSelector(store => store.userSlice)

  const userIsLogged = user.isLoggin

  const dispatch = useDispatch()
  
  const ifAsideOfFavorites = favoritesSlice.personalAside

  useEffect(()=>{
       axios.get('/api/user/me')
      .then(response => dispatch(setUserInfo(response.data)))
      .catch(err => {
          const status = err.response?.status
          dispatch(setUserInfo(status))
        })
  },[])

  
  return (
    <main className='mainContent__main'>
      {ifAsideOfFavorites && <AsidePersonalFavorites />}
      {userIsLogged ? <Movies /> : <Start /> }
    </main>
  )
}

export default MainContent
