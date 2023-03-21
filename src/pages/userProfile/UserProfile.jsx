import React, { useContext, useEffect, useState } from "react";
import {BsPersonPlusFill} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'
import { BsFillTagFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import "./userprofile.css";
import { BsEyeFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import Slide from "../../components/slide/Slide";
import { ApiContext } from "../../context/ApiContext";
import { shuffleArr } from "../../utils/shuffle/shuffleArr";

const icons = ["🎨", "🎨", "🧊", "🐻", "🖌️", "🧸"];
const text = ["DALL-E", "Unique Styles", "3D", "Cute", "Graphics", "Plushies"];

const UserProfile = () => {
  const { data } = useContext(ApiContext);
  const [userPropmt, setUserPrompt] = useState();
  const location = useLocation();
  const { user } = location.state;
  
  useEffect(() =>{
    window.scrollTo(0,0);
    if(data){
      const getData = shuffleArr(data);
      setUserPrompt(getData?.slice(0, 14));
    }
  },[data])

  console.log(user);
  return (
    <div className="user alignCenterColumn">
      <div className="user-images">
        <img src={user.cover} alt={user.title} className="user-cover-pic" />
        <img src={user.pic} alt={user.title} className="user-pic" />
        <div className="btn-group">
          <button>Message <RiMessage2Fill/></button>
          <button>Follow <BsPersonPlusFill/></button>
        </div>
      </div>
      <div className="user-info">
        <h1 className="fz40 textW alignCenterColumn">{user.title}</h1>
        <h3 className="fz18 textLG p20-0">{user.desc}</h3>
        <div className="view-rank alignFlexStart textW">
          <div className="alignSpace  rank-icon">
            <BsEyeFill />
            {user.views}
          </div>
          <div className="alignSpace rank-icon">
            <MdFavorite />
            {user.likes}
          </div>
          <div className="alignSpace rank-icon">
            <BsFillTagFill />
            {user.subs}
          </div>
          <div className="alignSpace rank-icon">
            <span>PromptBase Rank: #</span>
            {user.rank}
          </div>
          <div className="alignSpace rank-icon">
            <span>Joined: </span>{" "}
            {user.joined}
          </div>
        </div>
        <div className="user-disign alignFlexStart p10-0 bold textW fz12">
          {text.map((item, i) =>(
            <div key={i} className='design-type bgLight'>
              {icons[i]}{" "}{item}
            </div>
          ))}
        </div>
        <div className="follow bold alignFlexStart gap10">
          <span className="textLG">No reviews yet </span>
          <div className="following">
            <span className="textW">{user.following}</span>  
            <span className="textLG"> following</span>
          </div>
          <div className="followers">
            <span className="textW bold ">{user.followers}</span>
            <span className="textLG"> followers</span>
          </div>
        </div>
        <div className="alignFlexStart textG bold p10-0">
          <span>
            {user.title} charges ${user.charges} / custom prompt.
          </span>
        </div>
      </div>
      <div className="user-slide-prompt">
        <Slide title={`Most popular prompt by ${user.title}`} items={userPropmt} isLoading={false} />
      </div>
    </div>
  );
};

export default UserProfile;
