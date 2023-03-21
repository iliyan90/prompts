import React, { useState } from "react";
import "./login.css";
import icon from "./icons8-google-48.png";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
const Login = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="login hero alignColumnCenter">
      <div className="google-card">
        <div className="alignFlex btn-tabs">
          <button
            onClick={() => setActive(0)}
            className={active === 0 ? "btn-sign sign-active" : "btn-sign "}
          >
            Sign In
          </button>
          <button
            onClick={() => setActive(1)}
            className={active === 1 ? "btn-sign reg-active" : "btn-sign"}
          >
            Register
          </button>
        </div>
        <div className={active === 0 ? "btn-line" : "btn-line-active"}></div>
        <div className={active === 0 ? "switch-form" : "switch-form-active"}>
          <div className="login-form">
            <h1 className="form-title">Login</h1>
            <form action="" className="alignFlexColumn gap20">
              <div className="input-cont">
                <input type="text" placeholder="E-mail *" required />
                <div className="icon-email">
                  <MdEmail />
                </div>
              </div>
              <div className="input-cont">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password *"
                  required
                />
                <div className="icon-lock">
                  <AiFillLock />
                </div>
                <div className="icon-eye" onClick={() => setShow(!show)}>
                  {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
              <button className="btn-login">Log In</button>
              <button className="btn-forgot">Forgot Password?</button>
            </form>
          </div>
          <div className="login-form">
            <h1 className="form-title">Registration</h1>
            <form action="" className="alignFlexColumn gap20">
              <div className="input-cont">
                <input type="text" placeholder="Name *" required />
                <div className="icon-person">
                  <BsFillPersonFill />
                </div>
              </div>
              <div className="input-cont">
                <input type="text" placeholder="E-mail *" required />
                <div className="icon-email">
                  <MdEmail />
                </div>
              </div>
              <div className="input-cont">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password *"
                  required
                />
                <div className="icon-lock">
                  <AiFillLock />
                </div>
                <div className="icon-eye" onClick={() => setShow(!show)}>
                  {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
              <button className="btn-login">Register</button>
            </form>
          </div>
        </div>
        <div className="alignFlexColumn google-logo">
          <div className="hr-line textG"></div>
          <div className="alignFlex p10-0 pointer">
            <img width={40} src={icon} alt="" />
            <span className="fz24">Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
