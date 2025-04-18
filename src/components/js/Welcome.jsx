import React from "react";
import "../css/Welcome.css";
import noContent from "../../img/no-content.png";

const Welcome = () => {
  return (
    <main className="welcome">
      <h2>Welcome to Vidreel</h2>
      <p>Sorry, nothing to watch right now. Stay tuned for updates!</p>
      <img src={noContent} alt="No content available" />
    </main>
  );
};

export default Welcome;