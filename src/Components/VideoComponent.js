// src/components/VideoComponent.js
import React from 'react';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video width="70%" height="auto" muted autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/1709044676780.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
