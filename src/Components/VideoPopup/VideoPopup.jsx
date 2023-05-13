import React from "react";
import "./style.scss";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ id, show, setShow }) => {
  return (
    <div className={`popup-video-container ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={() => setShow(false)}></div>
      <div className="videoPlayer">
        <span className="close-btn" onClick={() => setShow(false)}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />
      </div>
    </div>
  );
};

export default VideoPopup;
