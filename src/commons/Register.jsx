import React, { useState } from 'react'
//router
import { useNavigate } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/register.scss'
//utils
import { firstLetterCapitalized } from '../utils/firstLetterCapitalized'
import cleanStateObj from '../utils/cleanSatateObj'

const Register = () => {
  const [ userInfo , setUserInfo ] = useState( { name: '', lastname: '', email: '', password: '' } )
  const navigate = useNavigate()

  const handleSubmit =( event )=>{
    event.preventDefault()
    axios.post('/api/user/register', userInfo)
      .then((res)=>{
        setUserInfo(cleanStateObj)
        navigate('/auth_panel?type=login')  
      })
      .catch(err=>{
        const status = err.response.status
        if(status === 500) 
        alert('Este email ya se encuentra registrado en nuestra base de datos, por favor elige otro')
    })
  }

  const handleChange = (event)=>{
    const inputName = event.target.name
    const inputValue = (inputName !== 'password' &&  
                        inputName !== 'email' ?    //If is different to 'password' and 'email' , apply lower case
                        event.target.value.toLowerCase() :
                        event.target.value);            //else not

    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  return (
    <section className='register__main'>

      <form onSubmit={handleSubmit}>
        <h2>Registrate</h2>
        <input 
          id="register-name" 
          name="name" 
          type="text" 
          value={firstLetterCapitalized(userInfo.name)}
          onChange={handleChange}
          placeholder='Nombre'
          required
          />

        <input 
          id="register-lastname" 
          name="lastname" 
          type="text" 
          value={firstLetterCapitalized( userInfo.lastname )}
          onChange={ handleChange }
          placeholder='Apellido'
          required
          />

        <input 
          id="register-password" 
          name="password" 
          type="password" 
          value={userInfo.password}
          onChange={ handleChange }
          placeholder='Contraseña'
          required
          />

        <input 
          id="register-email" 
          name="email" 
          type="email" 
          value={userInfo.email}
          onChange={ handleChange }
          placeholder='Email'
          required
          />

        <button type='submit'>Registrarme</button>
      </form>
      
    </section>
  )
}

export default Register
