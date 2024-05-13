import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../Images/logo.png';
import { motion } from "framer-motion";

const CustomNavbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');

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

  const handleLocationChange = () => {
    setIsHomePage(window.location.pathname === '/');
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setClick(false);
  };

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const handleScrollToSection = (section) => {
    // Scroll to the section using react-scroll library
    scroll.scrollTo(section, {
      duration: 500, // Duration of the scroll animation
      delay: 0,
      smooth: "easeInOutQuart", // Easing function for smooth animation
    });
    setClick(false); // Close the navbar menu after clicking on a link
  };

  return (
    <div className={color ? "header header-bg" : (isHomePage ? "header" : "header not-home")}>
      <div>
        <img src={logo} alt="logo" style={{ width: "128px" }} />
      </div>
      <div>
      <motion.ul
      className={click ? "nav-menu active" : "nav-menu"}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.li
        className="nav-menu-line"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" onClick={() => handleScrollToSection("home")}>HOME</Link>
      </motion.li>
      <motion.li
        className="nav-menu-line"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <ScrollLink to="about" smooth={true} duration={500} onClick={() => handleScrollToSection("about")}>
          ABOUT
        </ScrollLink>
      </motion.li>
      <motion.li
        className="nav-menu-line"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <ScrollLink to="menu" smooth={true} duration={500} onClick={() => handleScrollToSection("menu")}>
          MENU
        </ScrollLink>
      </motion.li>
      <motion.li
        className="nav-menu-line"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/events">TEAM</Link>
      </motion.li>
      <motion.li
        className="nav-menu-line"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/contact">CONTACT US</Link>
      </motion.li>
    </motion.ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
