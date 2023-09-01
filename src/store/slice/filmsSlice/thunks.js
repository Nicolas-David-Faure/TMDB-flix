// import axios from "axios"
// import { setFilmsFounded ,filmsLoading } from "./filmsSlice"


// export default function getFilmsSearched(filmName){
//   return async ( dispatch )=>{

//     const result = await axios.get(`/api/movie/search/${filmName}`).then(({data: {results}})=>results)
    

    
//     if(result){
//       let newArr = []

//       result.forEach(obj=>{
//         newArr.push(obj)
//       })
      
//       dispatch(setFilmsFounded({newArr}))
//     }

//   }
// }


