const express = require('express');
const axios = require('axios')
const router = express.Router();
const {Users, Movies} = require('../models');

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'd2b252c13bc8a9ed431ab7234dc8c253'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'


router.get('/genre',async (req, res)=>{
    await axios.get('https://api.themoviedb.org/3/genre/movie/list',{
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

router.get('/all',async (req ,res)=>{

  const type = 'discover';
  

  await axios.get(`${API_URL}/${type}/movie`,{
    params:{
      api_key: API_KEY,
      language:'es',
      include_video: true
    }
  }).then(({data})=>{
    res.send(data)
  })
  .catch(err=>console.error(err))
})

router.get('/search/:film',async (req ,res)=>{
  const {film} = req.params;
  const type = 'search';

  await axios.get(`${API_URL}/${type}/movie`,{
    params:{
      api_key: API_KEY,
      language:'es',
      include_video: true,
      query:  film
    }
  }).then(({data})=>{
    res.send(data)
  })
  .catch(err=>console.error(err))
})


module.exports = router;

