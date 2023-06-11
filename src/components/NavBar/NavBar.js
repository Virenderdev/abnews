import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const CustomNavbar = () => {
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

  // const scrollToSection = (section) => {
  //   scroll.scrollTo(section, {
  //     duration: 500,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  //   setClick(false);
  // };
  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setClick(false);
  };
  
  useEffect(() => {
    const currentPathname = window.location.pathname;
    const hash = window.location.hash;

    if (hash === "#about" && currentPathname !== "/") {
      setTimeout(() => {
        scrollToSection("about");
      }, 500);
    } else if (hash === "#menu" && currentPathname !== "/") {
      setTimeout(() => {
        scrollToSection("menu");
      }, 500);
    }
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
  <ScrollLink to="about" smooth={true} duration={500} onClick={() => scrollToSection("about")}>
    ABOUT
  </ScrollLink>
</li>
<li>
  <ScrollLink to="menu" smooth={true} duration={500} onClick={() => scrollToSection("menu")}>
    MENU
  </ScrollLink>
</li>
        <li>
          <Link to="/whatson">WHAT'S ON</Link>
        </li>
        <li>
          <Link to="/events">EVENTS & PRIVATE HIRE</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
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

export default CustomNavbar;
