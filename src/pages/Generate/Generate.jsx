import React, { useState } from "react";
import Login from "../Login/Login";
import { generateImg } from "../MainPage/MainPage";
import "./generate.css";

const Generate = () => {
  
  return (
    <div className="generate alignFlex hero">
      <div className="flex1 alignColumnFlex textW">
        <h1 className="fz46 p20-0">
          Create an acount to{" "}
          <span className="hero-title"> generate images</span>
        </h1>
        <h3 className="textG p10-0">
          Start prompt engineering instantly within PromptBase using Stable
          Diffusion.
        </h3>
        <h3 className="textG p10-0">
          Craft prompts and sell them on the marketplace.
        </h3>
        <h3 className="textG p10-0">
          Get 5 free generation credits every day.
        </h3>
        <div className="p20-0">{generateImg}</div>
      </div>
      <div className="flex1 p20-0 generate-right-side">
        <Login/>
      </div>
    </div>
  );
};

export default Generate;
