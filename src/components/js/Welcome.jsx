import React from "react";
import "../css/Welcome.css";
import NoContent from "./NoContent";
import Videos from "./Videos";
import axios from "axios";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch videos from YouTube API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&key=AIzaSyA75wcIay-5GXOOkeCl7odxt3PkvDJLJIs&maxResults=10&order=date`
        );
        // decode amp; to &
        response.data.items = response.data.items.map((item) => {
          item.snippet.title = item.snippet.title.replace(/&amp;/g, "&");
          return item;
        });
        setLoading(false);
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  return (
    <main className="welcome">
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Fetching trending videos from YouTube...</p>
        </div>
      ) : videos.length > 0 ? (
        <Videos videos={videos} />
      ) : (
        <NoContent />
      )}
    </main>
  );
};

export default Welcome;
