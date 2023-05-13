import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../Components/LazyLoadingImage/Img";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import Genres from "../../../Components/genres/Genres";

import "./style.scss";
import dayjs from "dayjs";
import CircleRating from "../../../Components/circleRating/CircleRating";
import { PlayIcon } from "../PlayBtn";
import VideoPopup from "../../../Components/VideoPopup/VideoPopup";

const DetailsBanner = ({ videos, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter((f) => f.job === "Writer");

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const handlePlayBtn = ()=>{
    setVideoId(videos.key);
    setShow(true)
  }

  return (
    <>
      {!loading && (
        <>
          {/* <div className="detailsBanner">
            {data && (
              <Img
                src={data.backdrop_path && url.poster + data?.backdrop_path}
              />
            )}
            <div className="bottom-overlay"></div>
          </div> */}
          <ContentWrapper>
            <div className="row top-row">
              <div className="left">
                {data && (
                  <Img
                    src={data.poster_path && url.poster + data?.poster_path}
                  />
                )}
              </div>
              <div className="right">
                <div className="title">
                  {`${data?.title || data?.name} (
                    ${dayjs(data?.release_date).format("YYYY")}
                  )`}
                </div>
                <span className="subtitle">{data?.tagline}</span>
                <Genres data={_genres} />

                <div className="row icons-row">
                  <CircleRating rating={data?.vote_average.toFixed(1)} />
                  <div
                    className="playbtn"
                    onClick={handlePlayBtn}
                  >
                    <PlayIcon />
                    <span className="text">Watch Trailer</span>
                  </div>
                </div>
                <div className="overview">
                  <h3>Overview</h3>
                  <span className="description">{data?.overview}</span>
                </div>
                <div className="row">
                  {data?.status && (
                    <div className="content-col">
                      <h3>Status</h3>
                      <span className="content">{data?.status}</span>
                    </div>
                  )}
                  {data?.release_date && (
                    <div className="content-col">
                      <h3>Release Date</h3>
                      <span className="content">
                        {dayjs(data?.release_date).format("YYYY MMM,DD")}
                      </span>
                    </div>
                  )}
                  {data?.runtime && (
                    <div className="content-col">
                      <h3>Run Time</h3>
                      <span className="content">
                        {toHoursAndMinutes(data?.runtime)}
                      </span>
                    </div>
                  )}
                </div>
                <ul className="basic-details-list">
                  {director?.length > 0 && (
                    <li className="basic-details-list-item">
                      <h3>Director</h3>
                      <span className="name">
                        {director?.map((d, i) => (
                          <span key={i}>
                            {d.name}
                            {director.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </li>
                  )}
                  {writer?.length > 0 && (
                    <li className="basic-details-list-item">
                      <h3>Writer</h3>
                      <span className="name">
                        {writer?.map((w,i) => (
                          <span key={i}>
                            {w.name}
                            {writer.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </li>
                  )}
                  {data?.created_by?.length > 0 && (
                    <li className="basic-details-list-item">
                      <h3>Created By</h3>
                      <span className="name">
                        {data?.created_by?.map((c,i) => (
                          <span key={i}>
                            {c.name}
                            {data?.created_by.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <VideoPopup
              id={videoId}
              setShow={setShow}
              show={show}
            />
          </ContentWrapper>
        </>
      )}
    </>
  );
};

export default DetailsBanner;
