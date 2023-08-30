import React, { useState } from 'react'
//axios
import axios from 'axios'
//styles
import './sass/register.scss'
//utils
import { firstLetterCapitalized } from '../utils/firstLetterCapitalized'
import { useNavigate } from 'react-router-dom'
import cleanStateObj from '../utils/cleanSatateObj'


const Register = () => {
  const [userInfo, setUserInfo] = useState({name: '', lastname: '', email: '', password: ''})
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('/api/user/register', userInfo)
    .then((res)=>{
      setUserInfo(cleanStateObj)
      navigate('/auth_panel?type=login')  
    })
    .catch(err=>{
      const status = err.response.status
      if(status === 500){
        alert('Este email ya se encuentra registrado en nuestra base de datos, por favor elige otro')
      }
    })
  }

  const handleChange = (e)=>{
    const inputName = e.target.name
    const inputValue = (inputName !== 'password' &&  
                        inputName !== 'email' ?    //If is different to 'password' and 'email' , apply lower case
                        e.target.value.toLowerCase() :
                        e.target.value);            //else not

    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  return (
    <section className='register__main'>
      <form onSubmit={handleSubmit}>
        <h2>Registrate</h2>
        <input 
          onChange={handleChange}
          type="text" 
          name="name" 
          id="register-name" 
          value={firstLetterCapitalized(userInfo.name)}
          placeholder='Nombre'
          required
          />

        <input 
          onChange={handleChange}
          type="text" 
          name="lastname" 
          id="register-lastname" 
          value={firstLetterCapitalized(userInfo.lastname)}
          placeholder='Apellido'
          required
          />

        <input 
          onChange={handleChange}
          type="password" 
          name="password" 
          id="register-password" 
          value={userInfo.password}
          placeholder='Contraseña'
          required
          />

        <input 
          onChange={handleChange}
          type="email" 
          name="email" 
          id="register-email" 
          value={userInfo.email}
          placeholder='Email'
          required
          />

        <button type='submit'>Registrarme</button>
      </form>
    </section>
  )
}

export default Register
