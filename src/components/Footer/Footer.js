import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";
import { useLocation } from 'react-router-dom';
import Logo from "../../Images/logo.png";
import HeroImg from '../HeroImg';
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation().pathname;

  return (

    <motion.section
    className='footer'
    initial={{ opacity: 0 }} // Initial animation state
    animate={{ opacity: 3 }} // Final animation state
    transition={{ duration: 2 }} // Transition duration
  >
    <Container className='mt-5'>
      <Row>
        <Col md={3}>  
          <img src={Logo} alt='Logo' style={{ width: "140px" }} />
        </Col>
        <Col md={3}>
          <h4 className='fs-3 text-black'>Company</h4>
          <p className='mb-1 text-black'>People</p>
          <p className='mb-1 text-black'>Diversity</p>
          <p className='mb-1 text-black'>History</p>
          <p className="text-black">Awards and Recognition</p>
        </Col>
 
        <Col md={3}>
          <h4 className='fs-3 text-black'>Careers</h4>
          <p className='mb-0 text-black'>Newsroom</p>
          <p className='mb-0 text-black'>Technology</p>
          <p className='mb-0 text-black'>Product and Design</p>
          <p className='mb-0 text-black'>Marketing</p>
          <p className='text-black'>Journalism</p>
        </Col>
        <Col md={3}>
          <h4 className='fs-3 text-black'>Privacy Policy</h4>
          <p className='mb-0 text-black'>Terms of Service</p>
          <p className='mb-0 text-black'>Contact</p>
          <p className='mb-0 text-black'>EMAIL: info@akhandbharat.com</p>
        </Col>
      </Row>
      <hr />
      {/* Location check is commented out for now */}
      {location !== "/delivery" && (
        <Row>
          <Col>
            <h3 className='text-center'>
              Copyrights reserved by 2023 @
              <a href="/" className="footer-links text-black" target="_blank">Akhand Bharat</a>
            </h3>
          </Col>
        </Row>
      )}
    </Container>
  </motion.section>
      
    
  )
}

export default Footer
