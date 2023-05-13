import React from "react";
import Img from "../LazyLoadingImage/Img";
import { useSelector } from "react-redux";
import Avatar from "../../assets/avatar.avif";


import "./style.scss";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const MovieCard = ({ data }) => {
  const {url} = useSelector((state)=>state.home);
  const ImgUrl = data.poster_path ? url.poster + data.poster_path : Avatar;

  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate(`/${data.media_type}/${data.id}`)}>
      <Img src={ImgUrl}/>
      <div className="title-container">
        <div className="title">{data.title || data.name}</div>
        {data.first_air_date || data.release_date &&
        <div className="release-date">
          {dayjs(data.first_air_date || data.release_date).format("YYYY MMM,DD")}
        </div>
        }
      </div>
    </div>
  );
};

export default MovieCard;
