import React, { useState } from 'react'
//router
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext'
import { useNavigate } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/login.scss'
//utils
import cleanStateObj from '../utils/cleanSatateObj'

const Login = () => {
  const [ userInfo , setUserInfo ] = useState({ email: '', password: '' })
  const { updateLoginUser } = useAcualizarDatosContext()
  const navigate = useNavigate()

  const handleSubmit =(event)=>{
    event.preventDefault()
    axios.post('/api/user/login', userInfo)
    .then((res)=>{
      setUserInfo(cleanStateObj)
      updateLoginUser()
      navigate('/browse')
    })
  }

  const handleChange = (event)=>{
    const inputValue = event.target.type !== 'number' ? event.target.value.toLowerCase() : event.target.value
    const inputName = event.target.name

    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  return (
    <section className='login__main'>

      <form onSubmit={handleSubmit}>
        <h2>Inicia sesión</h2>
         <input 
          id="register-email" 
          name="email" 
          type="email" 
          value={userInfo.email}
          onChange={handleChange}
          placeholder='Email'
          required
          />

        <input 
          id="register-password" 
          name="password" 
          type="password" 
          value={userInfo.password}
          onChange={handleChange}
          placeholder='Contraseña'
          required
          />
        <button type='submit'>Ingresar</button>
      </form>

    </section>
  )
}

export default Login
