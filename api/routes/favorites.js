const express = require("express");
const router = express.Router();

const { User , Movie , MovieUser} = require('../models');


router.get('/:user_mail', async( req, res)=>{
  const {user_mail} = req.params;
  try{
    const user = await User.findOne({where:{email:user_mail}});
    await user.getMovies().then(favoritesMovies=>res.send(favoritesMovies)).catch(err=>console.error(err))
  }catch{
    res.sendStatus(500)
  }
})


router.post('/add/:user_mail',async (req, res)=>{
  const { user_mail } = req.params;
  const {title, id} = req.body;
  

  console.log(user_mail)
  
  const movie = await Movie.findOrCreate({
    where: { id },
    defaults: { title, id}
  }).then(movie=>movie)
  .catch(err=>console.error(err))

  const user = await User.findOne({where:{email:user_mail}});

  await user.addMovies(movie[0]);

  await user.getMovies().then(favoritesMovies=>res.send(favoritesMovies)).catch(err=>console.error(err))
})

router.put('/remove', async(req,res)=>{
  const { id : film_id ,user_email } = req.body

  const movie = await Movie.findByPk(film_id).then(f=>f).catch(err=>console.error(err))

  const user = await User.findOne({where:{email: user_email}}).catch(err=>console.error(err));
  
  await user.removeMovies(movie);

  await user.getMovies().then(favoritesMovies=>res.send(favoritesMovies)).catch(err=>console.error(err))
  
})


module.exports = router