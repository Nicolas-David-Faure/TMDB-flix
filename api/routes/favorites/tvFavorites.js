const express = require("express");
const router = express.Router();

const { User , Tv , TvUser, TV } = require('../../models');
// /api/favorites/movie/${userEmail}

router.get('/:user_mail', async( req, res)=>{
  const {user_mail} = req.params;
 
  try{
    const user = await User.findOne({where:{email:user_mail}});
   
    await user.getTvs()
    .then(favoritesMovies=>res.send(favoritesMovies))
    .catch(err=>console.error(err))
  }catch{
    res.sendStatus(500)
  }
})

router.post('/add/:user_mail',async (req, res)=>{
  const { user_mail } = req.params;
  const { id } = req.body;


  const tvShow = await TV.findOrCreate({
    where: { id },
    defaults: req.body 
  })
  .then(tvShow=>tvShow)
  .catch(err=>console.error(err))

  const user = await User.findOne({ where:{email:user_mail}});
  await user.addTvs(tvShow[0]);
  await user.getTvs()
          .then(favoritestvShows=>res.send(favoritestvShows))
          .catch(err=>console.error(err))
  
})

router.put('/remove', async(req,res)=>{
  const { id : film_id ,user_email } = req.body

  const tvShow = await TV.findByPk(film_id).then(f=>f).catch(err=>console.error(err))
  
  const user = await User.findOne({where:{email: user_email}}).catch(err=>console.error(err));
  
  await user.removeTvs(tvShow);

  await user.getTvs().then(favoritestvShows=>res.send(favoritestvShows)).catch(err=>console.error(err))
})



module.exports = router