import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import Img from "../../Components/LazyLoadingImage/Img";
import { useSelector } from "react-redux";
import Download from "../../assets/download.jpg";
import "./style.scss";

const Carousel = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (dir) => {};
  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />

        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("left")}
        />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item.backdrop_path
                ? url.poster + item.backdrop_path
                : Download;
              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
