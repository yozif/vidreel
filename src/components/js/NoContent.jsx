import React from "react";
import "../css/NoContent.css";
import noContent from "../../img/no-content.png";

const NoContent = () => {
  return (
    <div className="no-content">
      <h2>Welcome to Vidreel</h2>
      <p>Sorry, nothing to watch right now. Stay tuned for updates!</p>
      <img src={noContent} alt="No content available" />
    </div>
  );
};

export default NoContent;