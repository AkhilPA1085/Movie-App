import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import { Pagination, Navigation } from "swiper";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../LazyLoadingImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genrs from "../genrs/Genrs";

import { useSelector } from "react-redux";
import dayjs from "dayjs";

const SwiperCarousel = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <ContentWrapper>
      <Swiper
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {!loading ? (
          <>
            {data?.map((item) => {
              const ImgUrl = item.backdrop_path
                ? url.poster + item.backdrop_path
                : Download;
              return (
                <SwiperSlide key={item.id}>
                  <div className="posterBlock">
                    <Img src={ImgUrl} />
                    <div className="title">
                      {item.original_title ? item.original_title : item.name}
                    </div>
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <span className="date">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>

                    <Genrs data={item.genre_ids.slice(0,2)} />
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
