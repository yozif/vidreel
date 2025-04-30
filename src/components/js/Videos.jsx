import React, { useState } from "react";
import "../css/Videos.css";

const Videos = ({ videos }) => {
  const [showAll, setShowAll] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null); // State for the active video

  // on click show more videos
  const showMoreVideos = () => {
    setShowAll(true);
  };

  // on click open iframe in a pop up
  const openVideoPopup = (videoId) => {
    setActiveVideoId(videoId); // Set the active video ID
  };

  // Close the overlay
  const closeVideoPopup = () => {
    setActiveVideoId(null); // Clear the active video ID
  };

  // Determine the videos to display
  const visibleVideos = showAll ? videos : videos.slice(0, 4);

  return (
    <div className="videos-background">
      <h2 className="videos-title">Trending Videos</h2>
      <div className="videos-container">
        {visibleVideos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <div className="iframe-thumbnail-wrapper">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
                className="iframe-thumbnail"
                onClick={() => openVideoPopup(video.id.videoId)} // Pass videoId here
              />
            </div>
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="show-more-vids-wrap">
          <button onClick={showMoreVideos}>Show more</button>
        </div>
      )}

      {/* Overlay for the iframe */}
      {activeVideoId && (
        <div className="video-overlay" onClick={closeVideoPopup}>
          <div
            className="iframe-overlay-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=1`}
              title="Video Player"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closeVideoPopup}>
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
