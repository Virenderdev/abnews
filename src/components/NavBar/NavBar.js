import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const scrollToAbout = () => {
    scroll.scrollTo(500);
    setClick(false);
  };

  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    // Check if the user navigated from a different page
    const { state } = location;
    if (firstRender.current && state && state.from !== location.pathname) {
      // Scroll to the menu section
      const scrollOptions = {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      };
      scroll.scrollTo('menu', scrollOptions);

      // Set firstRender to false to prevent subsequent scrolls
      firstRender.current = false;
    }
  }, [location]);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Link to="/about">ABOUT</Link>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="menu" smooth={true} duration={500}>
            <Link to="/">MENU</Link>
          </ScrollLink>
        </li>
        <li>
          <Link to="/whatson">WHAT'S ON</Link>
        </li>
        <li>
          <Link to="/events">EVENTS & PRIVATE HIRE</Link>
        </li>
        <li>
          <Link to="/contact">ALL LOCATIONS</Link>
        </li>
        <li>
          <Link to="/delivery">DELIVERY</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
