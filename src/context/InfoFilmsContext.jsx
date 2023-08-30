import React, { createContext, useContext, useState } from 'react';
//axios
import axios from 'axios';
import useAxiosGetData from '../hooks/useAxiosGetData'
//create context
const InfoFilmsContext = createContext();

export function InfoFilmsContextProvider({ children }) {
  const [filmsSerched, setFilmsSerched] = useState(null)
  const values = {
    filmsSerched,
    setFilmsSerched
  }
  return (
    <InfoFilmsContext.Provider value={values}>
      {children}
    </InfoFilmsContext.Provider>
  );
}

//hook
export function useInfoFilmsContext() {
  return useContext(InfoFilmsContext);
}



export default InfoFilmsContext





