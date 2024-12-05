import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomOutsideClick } from "./hoc/CustomOutsideClick";

const Header = () => {
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef(null); // Ref for the slider
  const triggerRef = useRef(null); // Ref for the button

  const toggleSlider = (e) => {
    setShowSlider((prevSatate) => !prevSatate);
  };

  //function funname(){}
  //const funname=()=>{}
  //onClick={functionName}
  //onClick={()=>{functionName}}
  //style={{marginLeft:"20px"}}
  return (
    <React.Fragment>
      <header className="header-wrapper">
        <div className="navigation-wrapper">
          <div className="container">
            <div className="navigation-inner">
              <div className="site-logo">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="Somaxso" />
                </Link>
              </div>
              <nav className="navigation-menu">
                <ul className="main-menu">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Projects"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Blog"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <button
                  className="sidebar-trigger"
                  ref={triggerRef}
                  onClick={toggleSlider}
                >
                  <svg
                    fill="currentColor"
                    height={16}
                    viewBox="0 0 16 16"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                  </svg>
                </button>
              </nav>
              <div className="header-number">
                <i className="las la-comments" />
                <div>
                  Let's Chat
                  <a href="https://wa.me/+918607638096">+91 8607638096</a>
                </div>
              </div>
              <div className="mobile-menu-icon">
                <div className="burger-menu">
                  <div className="line-menu line-half first-line" />
                  <div className="line-menu" />
                  <div className="line-menu line-half last-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CustomOutsideClick>
        <div id="sliderBox" className="popup-sidebox" ref={sliderRef}>
          <button className="sidebox-close">
            <i className="las la-times" />
          </button>
          <div className="sidebox-content">
            <div className="site-logo">
              <Link to="/" onClick={(e)=>{e.preventDefault();}} style={{cursor:"default"}}>
                <img src="assets/images/white-logo.svg" alt="logo" />
              </Link>
            </div>
            <p>
              Delivering premium technological software solutions for
              businesses. From development to deployment, we handle it all.
            </p>
            <ul className="sidebox-list">
              <li className="call">
                <span>Call for Enquiry:</span>+91 8607638096
              </li>
              <li>
                <span>You can find us at:</span>SCO-5, 2nd Floor, Sector-14,
                Near Civil Hospital Hisar, 125001
              </li>
              <li>
                <span>Email now:</span>
                <a href="mailto:@gmail.com">Example mailto link</a>
              </li>
            </ul>
          </div>
        </div>
      </CustomOutsideClick>
    </React.Fragment>
  );
};

export default Header;
