import React from "react";
import { useNavigate  } from "react-router-dom";
//styles
import "./sass/playButton.scss";
//icon
import playIcon from "../assets/icons/play.svg";
//axios
import axios from "axios";

const PlayButton = ({ film: { id } , film , isBanner=false}) => {
  const navigate = useNavigate();

  const isMovieOrTv = !Object.keys(film).includes('name') ? 'movie' : 'tv';

  const handleFilmToPlay = () => {
  
      axios(`/api/${isMovieOrTv}/video/${id}`)
      .then(( {data : {results}})=>{
        const filmKey = results[0]?.key
        if(filmKey){

          navigate('/play_film/'+filmKey)
        }else{  
          alert('Lo siento trailer no disponible')
        }
      })

  };

  return (
    <>
    {
      !isBanner ? 
      <div className="playButton__main" onClick={handleFilmToPlay}>
      {/*set film to a global state context to use on infoDescription.jsx*/}
      <img src={playIcon} alt="description" />
    </div>
      :
      <button onClick={handleFilmToPlay}>Reproducir</button>
    
}    
    </>


  );
};

export default PlayButton;
