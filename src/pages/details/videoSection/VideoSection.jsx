import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import "./style.scss";
import Img from "../../../Components/LazyLoadingImage/Img";
import { PlayIcon } from "../PlayBtn";
import VideoPopup from "../../../Components/VideoPopup/VideoPopup";
import { useState } from "react";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  return (
    <div className="video-section">
      {!loading && (
        <>
        {data?.results.length > 0 && (
        <ContentWrapper>
          <div className="main-title">Official Videos</div>
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
            {data?.results?.map((video) => {
              return (
                <SwiperSlide
                  key={video.id}
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                  <div className="video-thumbnail">
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                    <div className="playbtn">
                      <PlayIcon />
                    </div>
                  </div>
                  <span>{video?.name}</span>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <VideoPopup id={videoId} setShow={setShow} show={show} />
        </ContentWrapper>
        )}
        </>
      )}
    </div>
  );
};

export default VideoSection;
