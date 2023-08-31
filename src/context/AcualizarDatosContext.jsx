import React, { createContext, useContext, useState } from 'react';
//axios
import axios from 'axios';
import useAxiosGetData from '../hooks/useAxiosGetData'
//create context
const AcualizarDatosContext = createContext();

export function AcualizarDatosContextProvider({ children }) {
  const [sureToDelete, setSureToDelete] = useState(null)

  const [users = [] , updateUsers] = useAxiosGetData('/api/user/all')
  const [userLogged, updateLoginUser] = useAxiosGetData('/api/user/me')
  let userIsLogged = typeof userLogged === 'object' ? true : false;
  const values = {
    users,
    userLogged,
    sureToDelete,
    updateUsers,
    setSureToDelete,
    updateLoginUser,
    userIsLogged
  }
  return (
    <AcualizarDatosContext.Provider value={values}>
      {children}
    </AcualizarDatosContext.Provider>
  );
}

//hook
export function useAcualizarDatosContext() {
  return useContext(AcualizarDatosContext);
}




