import React from "react";
import "../css/Videos.css";

const Videos = ({ videos }) => {
  return (
    <div className="videos-background">
      <h2 className="videos-title">Top 10 Trending Videos</h2>
      <div className="videos-container">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
              <h3>{video.snippet.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
