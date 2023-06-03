import "./Navbar.css"
import React, { useState } from "react"
import {Link} from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar =()=>{
  const [click,  setClick] = useState(false);
  const [color, setColor] = useState(false)
  const handleClick =() =>{
    setClick(!click)
  }
  const changeColor=()=>{
    if(window.scrollY >=100){
        setColor(true)
    }else{
        setColor(false)
    }
  }
   
  window.addEventListener("scroll", changeColor);

  const scrollToAbout = () => {
    scroll.scrollTo(500); 
    setClick(false); 
  };
    return(
        <div className={color ? "header header-bg" : "header"}>
       
        <ul className={click ? "nav-menu.active" : "nav-menu"}>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
            <ScrollLink to="about" smooth={true} duration={500}>
            ABOUT
          </ScrollLink>
            </li>
             <li>
             <ScrollLink to="menu" smooth={true} duration={500}>
             MENU
          </ScrollLink>
                
            </li>
            <li>
                <Link to='/whatson'>WHAT'S ON</Link>
            </li>
            <li>
                <Link to='/events'>EVENTS & PRIVATE HIRE</Link>
            </li>
            <li>
                <Link to='/contact'>ALL LOCATIONS</Link>
            </li>
            <li>
                <Link to='/contact'>DELIVERY</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>):
            ( <FaBars size={20} style={{color: "#fff"}}/>)}
        
       
        </div>
        </div>
    )
}
export default Navbar
