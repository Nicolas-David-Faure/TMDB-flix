import React, { useState } from 'react'
import './sass/login.scss'
import axios from 'axios'
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userInfo, setUserInfo] = useState({email: '', password: ''})
  const { updateLoginUser} = useAcualizarDatosContext()
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('/api/user/login', userInfo)
      .then((res)=>{

        setUserInfo(prevState=>{
          let result = {}
          for(let key in prevState){
            result[key] = ''
          }
          return result
        })
        updateLoginUser()
        navigate('/')
      })
    }

  const handleChange = (e)=>{
    const inputValue = e.target.type !== 'number' ? e.target.value.toLowerCase() : e.target.value
    const inputName = e.target.name

    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  return (
    <section className='login__main'>
      <form onSubmit={handleSubmit}>
        <h2>Inicia sesión</h2>
         <input 
          onChange={handleChange}
          type="email" 
          name="email" 
          id="register-email" 
          value={userInfo.email}
          placeholder='Email'/>

        <input 
          onChange={handleChange}
          type="password" 
          name="password" 
          id="register-password" 
          value={userInfo.password}
          placeholder='Contraseña'
          />
        <button type='submit'>Ingresar</button>
      </form>
    </section>
  )
}

export default Login
