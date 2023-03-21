import React, { useContext, useState } from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext";

const logo = "https://promptbase.com/assets/img/logo/logo_200_png.png";

const links = ["/marketplace", "/generate", "/hire", "/login", "/sell"];
const btn = [
  {
    text: "Marketplace",
    icon: <MdOutlineKeyboardArrowDown />,
  },
  {
    text: "Generate",
  },
  {
    text: "Hire",
  },
  {
    text: "Login",
  },
  {
    text: "Sell",
    icon: <BsArrowRightShort />,
  },
];
const btnStyle = ` wMaxCont p10 pointer bgTran noBord textW alignJustFlex `;

const dropMenuTitle = [
  "Best AI Prompts",
  "Best Midjourney Prompts",
  "Best ChatGPT Prompts",
  "Best DALL-E Prompts",
  "Best Stable Diffusion Prompts",
  "Best GPT-3 Prompts",
];

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  const { setSelectedModel } = useContext(ApiContext);
  const [openMenu, setOpenMenu] = useState(false);

  const select = [
    () => setSelectedModel("All"),
    () => setSelectedModel("Midjourney"),
    () => setSelectedModel("ChatGPT"),
    () => setSelectedModel("DALL-E"),
    () => setSelectedModel("Stable Diffusion"),
    () => setSelectedModel("GPT-3"),
  ];

  const dropMenu = (setShow) => (
    <div
      className="drop-down"
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
    >
      {dropMenuTitle.map((item, i) => (
        <React.Fragment key={i}>
          <Link to={"/marketplace"}>
            <button onClick={select[i]} className="drop-button">
              {item}
            </button>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="navbar alignJustFlex p0-10 h60">
      <div
        className=" alignFlexStart pointer "
        onClick={() => {
          navigate("/");
          setActive(null);
        }}
      >
        <img className="logo" src={logo} alt="logo" />
        <span className="textW fz20 prompt-text-logo">PromptBase</span>
      </div>
      <div className="flex2 alignFlex gap0">
        <input
          type="text"
          placeholder="Search Prompts"
          className="bgLight input-navbar p10 fz12 textW"
        />
        <button className=" fz24 p5-10 alignCenter pointer srch-button">
          <AiOutlineSearch />
        </button>
      </div>
      {/* Mobile menu */}
      <div className="mobile-hamburger">
        <div className="hamburger" onClick={() => setOpenMenu(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={
            openMenu ? "mobile-slide-menu-active" : "mobile-slide-menu"
          }
        >
          <div className="alignJustFlex mob-nav-btn">
            <div>
              <img src={logo} className="logo" alt={"logo"} />
            </div>
            <button onClick={() => setOpenMenu(false)} className="btn-dark">
              {<AiOutlineClose />}
            </button>
          </div>
          <div className="alignColumnCenter gap10 fz32">
            {btn.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    onClick={() => {
                      navigate(links[i]);
                      setOpenMenu(false);
                    }}
                  >
                    <span className="textW">{item.text}</span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      {/* navbar large size menu */}
      <div className="flex1 alignJustFlex navbar-menu">
        {btn.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                onClick={() => {
                  navigate(links[i]);
                  setActive(i);
                }}
                onMouseEnter={() => {
                  i === 0 && setShow(true);
                }}
                onMouseLeave={() => setShow(false)}
                className={active === i ? btnStyle + `active` : btnStyle}
              >
                <span>{item.text}</span>
                {item.icon}
              </div>
              {show && dropMenu(setShow)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
