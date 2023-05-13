import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import "./style.scss";
import Img from "../../../Components/LazyLoadingImage/Img";
import { useSelector } from "react-redux";

import Avatar from "../../../assets/avatar.avif"
import { PlayIcon } from "../PlayBtn";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <div className="cast">
      {!loading && (
        <>
        {data?.length > 0 && (
        <ContentWrapper>
            <div className="main-title">Top Cast</div>
          <Swiper
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            loop={true}
            modules={[Pagination, Navigation]}
            className="castSwiper"
          >
            {data?.map((cast) => {
              const imgUrl = cast.profile_path
                ? url.profile + cast.profile_path
                : Avatar;
              return (
                <SwiperSlide key={cast.id}>
                  <div className="img-container">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name">{cast.name}</div>
                  <div className="character">{cast.character}</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ContentWrapper>
        )}
        </>
      )}
    </div>
  );
};

export default Cast;
