/** @format */

import React, { memo } from "react";
import classes from "./VideoComponent.module.css";

const VideoComponent = memo(({ videoSrc }) => {
  let videoId = videoSrc.split("v=")[1];
  let embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <iframe src={embedUrl} className={`${classes.iframe}`}></iframe>
      </div>
    </React.Fragment>
  );
});

export default VideoComponent;
