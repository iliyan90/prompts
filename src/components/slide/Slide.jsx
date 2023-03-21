import React, { useState } from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward} from "react-icons/io";

import "./slide.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/spinner/Spinner";
const Slide = ({ title, items, isLoading}) => {
  let settings = {
    dots: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    className: "slide-slick custom-indicator",
    responsive:[
        {
            breakpoint: 1270,
            settings:{
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 730,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 525,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 390,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
  };
  const navigate = useNavigate()
  
  
   return ( isLoading ? <Spinner/> :( 
    <div className="slide p20">
      <div className="alignFlexStart slide-title-items">
        <h2 className="slide-title">{title}</h2>
        <div className=" alignFlex textW fz12 slide-explore ">
            <div className=" wMaxCont " onClick={() => navigate('/marketplace')}>Explore All</div>
            <BsArrowRightShort size={16}/>
        </div>
        <div className="slide-arrow pointer textW alignCenter"><IoIosArrowForward/></div>
      </div>
      <div className="hr-line"></div>
      <div className="slide-slick-items">
        <Slider {...settings}>
          {items?.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </Slider>
      </div>
    </div>)
  );
};

export default Slide;
