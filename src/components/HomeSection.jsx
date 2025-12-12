// src/components/HomeSection.jsx
import React from "react";

const HomeSection = () => {
  return (
    <div className="home-section">
      <h2 className="section-title">Featured Anime</h2>

      <div className="video-box">
        <video controls className="video-player">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </div>

      <h2 className="section-title" style={{ marginTop: "40px" }}>
        Featured Movie
      </h2>

      <div className="video-box">
        <video controls className="video-player">
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
};

export default HomeSection;
