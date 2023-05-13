import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../LazyLoadingImage/Img";
import CircleRating from "../circleRating/CircleRating";

import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";

import Download from "../../assets/download.jpg";
import "./style.scss";

const SwiperCarousel = ({ data, loading ,endpoint }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <Swiper
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {!loading ? (
          <>
            {data?.map((item) => {
              const ImgUrl = item.backdrop_path
                ? url.poster + item.backdrop_path : Download;
                return (
                <SwiperSlide
                  key={item.id}
                  onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                  <div className="posterBlock">
                    <Img src={ImgUrl}/>
                    <div className="title">
                      {item.original_title ? item.original_title : item.name}
                    </div>
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <span className="date">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>

                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        ) : (
          <span>Loading....</span>
        )}
      </Swiper>
    </ContentWrapper>
  );
};

export default SwiperCarousel;
