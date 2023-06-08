import React, { useRef } from 'react';
import "./ContactUs.css"
import contactimage from "../../Images/contactimage.webp"
import { Col, Row } from 'react-bootstrap';
import CustomNavbar from '../../components/NavBar/NavBar';
import foodPic from "../../Images/foodPic.webp"
import Footer from '../../components/Footer/Footer';
import MapContainer from './MapContainer';
import emailjs from 'emailjs-com';
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        // e.preventDefault();
      
        emailjs.sendForm('service_ovjzn8q', 'template_a2n5p0j', e.target, 'EbhDO87gC1f14SXqC')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      
        e.target.reset();
      };
  return (
    <>
        <CustomNavbar />
<div className="hero">
 
    <div
      className="img-fluid"
      style={{
        backgroundImage: `url(${foodPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '90vh',
       
    
      }}
    >
        
   <Row >
    <Col md={5} className='content-main' >
      <h1 className='text-center text-white fw-bold'>AUTHENTIC THAI FOOD MADE IN INDIA</h1>
    </Col>
    <Col md={6}  className='content-text'>
      <p >Our Thai Kitchen offers some of the best food in Waterloo.</p>
      <p>For lunch, we serve a daily changing lunch menu with a selection of Thai dishes to choose from.</p>
      <p>This can be enjoyed in the pubs with a cold beer or our Thai Shack at The Ring acts as the perfect place to drop in and grab a takeaway in Southwark.​</p>
      <p>Our evening menu extends to more authentic Thai classics and a few of our hidden favourites to accompany them.</p>
      <p>So if you are looking for a Thai dining experience in South London then head into one of our venues</p>
    </Col>
   </Row>
    </div>
  
  </div>
  <Row className='my-4'>
        <Col md={12} >
  <MapContainer/>
  </Col>
  </Row>
  
        <Row className='justify-content-center justify-content-md-start my-5'>
        <Col md={6} xs={12} className="position-relative">
 
</Col> 

<Col md={6}  className="">
      <div className="form-container" >
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" value="Send">Submit</button>
        </form>
      </div>
      </Col>
      </Row>
    {/* </div> */}
    <Footer/>
   </>
  );
};

export default ContactUs;
