import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef(null); // Ref for the slider
  const triggerRef = useRef(null); // Ref for the button

  /* function ekfunction(e) {
    setShowSlider(true);
    const classList = Array.from(e.target.classList);
    const className = classList.join(" ");
    console.log(className);
  } */

  const toggleSlider = (e) => {
    console.log("click", showSlider);
    setShowSlider((prevSatate) => !prevSatate);
    //setShowSlider(true)
    /* if (e.currentTarget.className === "sidebar-trigger") {
     setShowSlider(true);
    } else {
      setShowSlider(false);
    } */
  };

  const handleClickOutside = (e) => {
    if (
      sliderRef.current &&
      !sliderRef.current.contains(e.target) && // Check if click is outside the slider
      triggerRef.current &&
      !triggerRef.current.contains(e.target) // Check if click is outside the button
    ) {
      setShowSlider(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSlider]);

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
                <a href="index.html">
                  <img src="assets/images/logo.png" alt="Somaxso" />
                </a>
              </div>
              <nav className="navigation-menu">
                <ul className="main-menu">
                  <li>
                    {/* <a href="index.html">Home</a> */}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {/* <a href="about-us.html">Company</a> */}
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    {/* <a href="services.html">Services</a> */}
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    {/* <a href="contact.html">Contact</a> */}
                    <Link to="/contact">Contact</Link>
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
      {/* slider */}
      <div
        id="sliderBox"
        className="popup-sidebox"
        ref={sliderRef}
        style={{ display: showSlider ? "block" : "none" }}
      >
        <button className="sidebox-close">
          <i className="las la-times" />
        </button>
        <div className="sidebox-content">
          <div className="site-logo">
            <a href="index.html">
              <img src="assets/images/white-logo.svg" alt="logo" />
            </a>
          </div>
          <p>
            Delivering premium technological software solutions for businesses.
            From development to deployment, we handle it all.
          </p>
          <ul className="sidebox-list">
            <li className="call">
              <span>Call for Enquiry:</span>+91 8607638096
            </li>
            <li>
              <span>You can find us at:</span>SCO-5, 2nd Floor, Sector-14, Near
              Civil Hospital Hisar, 125001
            </li>
            <li>
              <span>Email now:</span>
              <a href="mailto:@gmail.com">Example mailto link</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
