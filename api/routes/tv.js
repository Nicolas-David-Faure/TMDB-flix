const express = require('express');
const axios = require('axios')
const router = express.Router();
const {Users } = require('../models');

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'd2b252c13bc8a9ed431ab7234dc8c253'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'


router.get('/all/:page',async (req ,res)=>{
  const { page } = req.params 
  const type = 'discover';
  
  await axios.get(`${API_URL}/${type}/tv`,{
    params:{
      api_key: API_KEY,
      language:'es',
      include_video: true,
      page: 1
    }
  }).then(({data})=>{

    res.send(data)
  })
  .catch(err=>console.error(err))
})

router.get('/search/:film',async (req ,res)=>{
  const { film } = req.params;
  const type = 'search';

  await axios.get(`${API_URL}/${type}/tv`,{
    params:{
      api_key: API_KEY,
      language:'es',
      include_video: true,
      query: film
    }
  }).then(({data})=>{
    res.send(data)
  })
  .catch(err=>console.error(err))
})

router.get('/similar/:tv_id', async(req,res)=>{
  const { tv_id } = req.params


  await axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/similar`,{
        params:{
          api_key: API_KEY,
          language:'es',
        }
      })
      .then(({data})=>{
        res.send(data)
      })
      .catch(err=>{
        console.err(err)
      })
})

















// router.get('/genre',async (req, res)=>{
//     await axios.get('https://api.themoviedb.org/3/genre/movie/list',{
//         params:{
//           api_key: API_KEY,
//           language:'es',
//         }
//       })
//       .then(({data})=>{
        
//         res.send(data)
//       })
//       .catch(err=>{
//         console.err(err)
//       })
// })
// router.get('/credits/:movie_id',async (req,res)=>{
//   const {movie_id} = req.params
//   await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`,{
//     params:{
//       api_key: API_KEY,
//       language:'es',
//     }
//   })
//   .then(({data})=>{
//     res.send(data)
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// router.get('/video/:movie_id', async(req, res)=>{
//   const {movie_id} = req.params
//   await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,{
//     params:{
//       api_key: API_KEY,
//       language:'es',
//     }
//   })
//   .then(({data})=>{
//     res.send(data)
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })


// router.get('/similar/:movie_id', async(req,res)=>{
//   const {movie_id} = req.params
//   await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar`,{
//         params:{
//           api_key: API_KEY,
//           language:'es',
//         }
//       })
//       .then(({data})=>{
//         res.send(data)
//       })
//       .catch(err=>{
//         console.err(err)
//       })
// })




module.exports = router;
