import React from "react";
import "./progress.css";
const ProgressBar = ({ progress }) => {
  return (
    <div className="pro-bar">
      
      <div className="progress-bar">
        <div className="the-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="procent">
        <span className="textW fz22">Step {progress / 17}/6</span>
      </div>
    </div>
  );
};

export default ProgressBar;
