import React from 'react';
import Whatsonheader from "../../Images/whatsonbackground.webp";
import CustomNavbar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import whatson1 from "../../Images/whatson1.webp";
import whatson2 from "../../Images/whatson2.webp";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import WhatsonheaderCard from '../../components/Cards/WhatsonheaderCard';
import cardData from "../../components/Cards/Cards";
import "./Whatson.css";
import { Link } from 'react-router-dom';

const Whatson = ({ cards }) => {
  return (
    <>
      <CustomNavbar />
      <div className='whatson-hero'>
        <div className='mask'>
          <img className='intro-img' src={Whatsonheader} alt="background" />
        </div>
        <div className='content'>
          <Container className='content-container'>
            <WhatsonheaderCard cards={cardData()} />
            <Row className='justify-content-center'>
              <Col xs='auto'>
                <div className=" d-flex justify-content-center align-items-center mt-5">
                  <Link to="https://www.facebook.com/" target='_blank'><BsFacebook style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} /></Link>
                  <Link to="https://twitter.com/" target='_blank'><AiFillTwitterCircle style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} /></Link>
                  <Link to='https://www.linkedin.com/feed/' target='_blank'><RiInstagramFill style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} /></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    <Row className="mt-3">
  <Col md={6}>
    <Card className="h-100">
      <Card.Img variant="top" src={whatson1} alt="image1" className="img-fluid" />
    </Card>
  </Col>
  <Col md={6}>
    <Card className="h-100">
      <Card.Img variant="top" src={whatson2} alt="image2" className="img-fluid" />
    </Card>
  </Col>
   </Row>
      <Footer />
    </>
  );
}

export default Whatson;
