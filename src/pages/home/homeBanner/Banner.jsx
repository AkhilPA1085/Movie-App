import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../Components/LazyLoadingImage/Img";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";

const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home)

  const {data,loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
    const bg = url.backdrop + data?.results[Math.floor(Math.random()*20)].backdrop_path;
    setBackground(bg);
  },[data])

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
    }
  };
  return (
    <div className="home-banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background}/>
        </div>
      )}

      <div className="bottom-overlay"></div>

      <ContentWrapper>
        <div className="banner-content">
          <h1 className="title">welcome</h1>
          <h6 className="sub-title">
            Millions of movies and Tv shows to Discover
          </h6>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search Movies or Tv Shows..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
