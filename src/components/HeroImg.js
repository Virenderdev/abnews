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

import "./HeroImgStyles.css"
const HeroImg = () => {
  const navigate = useNavigate()
  const handleBooking =()=>{
    navigate('/booking')
  }
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${Homeheader})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Row>
        <Col md={3} className="d-flex justify-content-center ms-2">
  <div
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
  </div>
</Col>


          </Row>
          <Row>
          <Col md={12} className="d-flex justify-content-center mb-5">
            <img src={jacksImage} alt="jacsImage"  className='jacsimage'/>
          </Col>
        </Row>
        <Row>
        <Col md={12} className="d-flex icons " >
  <div className="d-flex align-items-end justify-content-center" style={{ flex: 1 }}>
  <Link to="https://www.facebook.com/" target='_blank'><BsFacebook style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} /></Link>
  <Link to="https://twitter.com/" target='_blank'> <AiFillTwitterCircle style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} /></Link>
  <Link to='https://www.linkedin.com/feed/' target='_blank'><RiInstagramFill style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} /></Link>
  </div>
  <div className="">
    <img src={deliveryIcon} alt="deliveryIcon" style={{ width: "6rem", height: "6rem" }} className='delivery-icon' />
  </div>
</Col>

        </Row>
      
      </Container>
    </div>
  );
};

export default HeroImg;
