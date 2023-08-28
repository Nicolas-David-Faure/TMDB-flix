import React, { createContext, useContext, useState } from 'react';
import useAxiosGetData from '../hooks/useAxiosGetData';
import axios from 'axios';

const AcualizarDatosContext = createContext();

export function AcualizarDatosContextProvider({ children }) {
  const [users = [] , updateUsers] = useAxiosGetData('/api')
  const [jobs = [] , updateJobs] = useAxiosGetData('/api/jobs')

  const [sureToDelete, setSureToDelete] =  useState(null)

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
    jobs,
    sureToDelete,
    updateUsers,
    updateJobs,
    handleDeleteUser,
    setSureToDelete
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




