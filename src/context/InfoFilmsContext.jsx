// import React, { createContext, useContext, useState } from 'react';
// //axios
// import axios from 'axios';
// import useAxiosGetData from '../hooks/useAxiosGetData'
// //create context
// const InfoFilmsContext = createContext();

// export function InfoFilmsContextProvider({ children }) {
  
//   const [filmDescription, setFilmDescription] = useState(null)
//   const [genres, setGenres] = useState(null)

//   const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'

//   const values = {
   
   
//     IMAGE_PATH,
//     setFilmDescription,
//     filmDescription,
//     genres,
//     setGenres
//   }
//   return (
//     <InfoFilmsContext.Provider value={values}>
//       {children}
//     </InfoFilmsContext.Provider>
//   );
// }

// //hook
// export function useInfoFilmsContext() {
//   return useContext(InfoFilmsContext);
// }



// export default InfoFilmsContext





