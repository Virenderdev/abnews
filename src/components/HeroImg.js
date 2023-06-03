import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Homeheader from '../Images/Homeheader.jpg';
import jacksImage from '../Images/Jacks_white_logo.webp';
import deliveryIcon from "../Images/deliveroo-logo-brand-food-deliver.png";

const HeroImg = () => {
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
        <Col md={3} className="d-flex justify-content-center  mt-5">
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
              }}
            >
              <i
                className="sr-fa sr-fa-logo"
                style={{
                  display: 'block',
                  float: 'left',
                  fontSize: '21px',
                  margin: '-3px 0px 0px 2px',
                }}
              ></i>
              <span
                style={{
                  display: 'inline-block',
                  marginRight: '7px',
                  maxWidth: '130px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  letterSpacing: '0px',
                }}
              >
                BOOK NOW
              </span>
            </div>
          </Col>
          <Col md={12} className="d-flex justify-content-center">
            <img src={jacksImage} alt="jacsImage" />
          </Col>
        </Row>
        <Row>
        <Col md={12} className="d-flex justify-content-center align-items-center" style={{ marginTop: "9rem" }}>
  <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
    <BsFacebook style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} />
    <AiFillTwitterCircle style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} />
    <RiInstagramFill style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} />
  </div>
  <div className="d-flex justify-content-end">
    <img src={deliveryIcon} alt="deliveryIcon" style={{ width: "6rem", height: "6rem" }} />
  </div>
</Col>

        </Row>
      
      </Container>
    </div>
  );
};

export default HeroImg;
