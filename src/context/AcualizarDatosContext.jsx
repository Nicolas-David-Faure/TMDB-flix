import React, { createContext, useContext, useState } from 'react';

import axios from 'axios';

import useAxiosGetData from '../hooks/useAxiosGetData'

const AcualizarDatosContext = createContext();

export function AcualizarDatosContextProvider({ children }) {
  const [users = [] , updateUsers] = useAxiosGetData('/api/user/all')
  const [sureToDelete, setSureToDelete] =  useState(null)
  
  const [userLogged, updateLoginUser] = useAxiosGetData('/api/user/me')

  const handleDeleteUser =(id , name, lastName)=>{
    axios.delete(`/api/users/${id}`)
    .then(()=>{
      updateUsers()
      setSureToDelete(null)
      alert(`Se eliminó a ${name} ${lastName}`)
    })
    .catch(err=>{
      console.error(err)
    })
  }


  const values = {
    users,
    userLogged,
    sureToDelete,
    updateUsers,
  
    handleDeleteUser,
    setSureToDelete,
    updateLoginUser
  }
  return (
    <AcualizarDatosContext.Provider value={values}>
      {children}
    </AcualizarDatosContext.Provider>
  );
}

export function useAcualizarDatosContext() {
  return useContext(AcualizarDatosContext);
}




