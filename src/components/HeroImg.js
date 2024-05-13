import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Homeheader from '../Images/Homeheader.jpg';
import jacksImage from '../Images/Jacks_white_logo.webp';
import deliveryIcon from "../Images/deliveroo-logo-brand-food-deliver.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangle } from '@fortawesome/free-regular-svg-icons';
import { motion } from "framer-motion";


import "./HeroImgStyles.css"
// import FlipBook from './FlipBook';
const HeroImg = () => {
  const navigate = useNavigate()
  const handleBooking =()=>{
    navigate('/booking')
  }

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0.0)',
      backgroundColor: '#f97300',
      color: '#fff',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
      backgroundColor: '#ffad00', // Change to a lighter shade
      color: '#000', // Change text color to black
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.9,
    },
  };
  return (
    <div
      className="hero"
      style={{
        // backgroundImage: `url(${Homeheader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // margintop: '100px',
      }}
    >
      <Container>
        <Row>
        <Col md={3} className="d-flex justify-content-center ms-2">
  {/* <div
    id="sr-res-root"
    className="sr-lg sr-light sr-#41414a"
    style={{
      cursor: 'pointer',
      borderRadius: '3px',
      textAlign: 'center',
      boxSizing: 'border-box',
      lineHeight: '15px',
      overflow: 'hidden',
      backgroundColor: 'white',
      color: 'rgb(65, 65, 74)',
      border: '1px solid rgb(65, 65, 74)',
      fontWeight: 400,
      padding: '14px 0px 17px 10px',
      width: '178px',
      fontSize: '18px',
      height: '45px',
      position: 'relative',
    }}
    onClick={handleBooking}
  >
    <span
      style={{
        position: 'absolute',
        top: '50%',
        // right: '30px',
        left: 0,
        transform: 'translateY(-50%)',
        width: '25px',
        height: '20px',
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
        borderRight: '10px solid black',
      }}
    ></span>
    <span>BOOK NOW</span>
  </div> */}
</Col>


          </Row>
          <Row>
    <Col md={12} className="d-flex justify-content-center mb-5">
        <div style={{ display: 'flex', alignItems: 'center',marginTop:'120px' }}>
            {/* <img src="" alt="" className="jacsimage" style={{ height: '150px', width: '200px', marginRight: '20px' }} /> */}
            <div>
                <Link to='./FlipBook'>
                <motion.button
      style={{
        height: '70px',
        width: '180px',
        borderRadius: '30px',
        fontSize: '18px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
      }}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      Read News
    </motion.button>
                </Link>
            </div>
        </div>
    </Col>
</Row>

<Row>
  <Col md={12} className="right_conatct_social_icon">
    <motion.div
      className="socil_item_inner"
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ duration: 1 }} // Transition duration
    >
      <ul>
        <li>
          <Link to="https://www.facebook.com/" target='_blank'>
            <BsFacebook style={{ color: '#0866ff', width: '40px', height: '40px', margin: '0 5px',marginLeft: "98rem" }} />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/" target='_blank'>
            <AiFillTwitterCircle style={{ color: 'lightblue', width: '40px', height: '40px', margin: '0 5px',marginLeft: "98rem" }} />
          </Link>
        </li>
        <li>
          <Link to='https://www.linkedin.com/feed/' target='_blank'>
            <RiInstagramFill style={{ color: 'red', width: '40px', height: '40px', margin: '0 5px',marginLeft: "98rem" }} />
          </Link>
        </li>
      </ul>
    </motion.div>
  </Col>
</Row>
      
      </Container>
    </div>
  );
};

export default HeroImg;
