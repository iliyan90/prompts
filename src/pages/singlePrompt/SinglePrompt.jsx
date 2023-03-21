import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singleprompt.css";
import { BsTag } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Slide from "../../components/slide/Slide";
import { ApiContext } from "../../context/ApiContext";
const SinglePrompt = () => {
  const location = useLocation();
  const { state } = location || {};
  const { prompt } = state;
  const {data} = useContext(ApiContext);
    const [similar, setSimilar] = useState([]);
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);

    useEffect(() =>{
        if(data && prompt){
            const temp = data?.filter((item) => item.prompts === prompt.prompts);
            setSimilar(temp);
        } 
    },[data])

  return (
    <div className="single">
      {/* SinglePrompt
        <img src={prompt.img} alt="" />
        {prompt.title}{" "}
        {prompt.price}{" "}
        {prompt.prompts}{" "}
        {prompt.logo}{" "}
        <img src={prompt.sideImg} alt="" /> */}
      <div className="single-prompt">
        <div className="flex1 alignCenterColumn gap10 textW single-left-side">
          <img src={prompt.img} alt="" className="single-cover-img" />
          <h1 className="textW fz46 p20-0">{prompt.title}</h1>
          <div className="alignFlex textLG ">
            <span>52 words</span>
            <span>Tested</span>
            <span>Tips</span>
          </div>
          <div className="user-info alignSpace">
            <div className="textLG alignFlex">
              <BsTag />
              <span>53</span>
              <img src={prompt.img} alt="" className="user-img" />
              <div className="user-name">@whichsidebright</div>
            </div>
            <div className="alignFlex gap0 textW">
              5.0 <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              (1)
            </div>
          </div>
          <div className="hr-line"></div>
          <p className="textLG">Turn any subject into a high quality piece of abstract expressionist art. Prompt is fully customizable with your preferences on color and overall design. Can add different aspect ratios for a wide variety of outcomes. Tips and alternative options included. Please rate and review!</p>
          <span className="fz46 textW p20-0">${prompt.price}</span>
          <button className="btn-white m20-0">Get Prompt</button>
        </div>
        <div className="single-right-side">
          <div className="single-side">
            <img src={prompt.sideImg} alt="" className="single-side-img" />
          </div>
        </div>
      </div>
        <div className="similar-prompts p20-0">
            <Slide title='Similar Prompts' items={similar} isLoading={false}/>
        </div>
    </div>
  );
};

export default SinglePrompt;
