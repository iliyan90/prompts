import React from "react";
import "./card.css";
import { AiOutlineEye } from "react-icons/ai";
import { BsTag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card pointer relative">
      {item.img && (
        <img
          className="card-img"
          src={item.img}
          alt={item.title}
          onClick={() => navigate(`/prompt/${item.title.slice(14)}`, {state: {prompt: item}})}
        />
      )}
      {item.cover && (
        <img
          className="card-img"
          src={item.cover}
          alt={item.title}
          onClick={() => navigate(`/user/${item.title.slice(1)}`, {state:{user: item}})}
        />
      )}
      {item.pic && (
        <img
          src={item.pic}
          alt={item.title}
          className="card-pic"
          onClick={() => navigate(`/user/${item.title.slice(1)}`, {state:{user: item}})}
        />
      )}
      <div className="card-title textW p5">
        {item.logo}
        {item.prompts}
      </div>
      <div className="card-name alignJustFlex p0-10">
        {item.title}
        {item.views && (
          <div className="card-user-title ">
            <div className="alignFlex gap0">
              <AiOutlineEye />
              {item.views}
            </div>
            <div className="alignFlex gap0">
              <BsTag />
              {item.subs}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
