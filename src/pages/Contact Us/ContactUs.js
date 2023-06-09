import React, { useRef } from 'react';
import "./ContactUs.css"
import contactimage from "../../Images/contactimage.webp"
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from '../../components/NavBar/NavBar';
import foodPic from "../../Images/foodPic.webp"
import Footer from '../../components/Footer/Footer';
import emailjs from 'emailjs-com';
const ContactUs = () => {
    const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
      
    //     emailjs.sendForm('service_ovjzn8q', 'template_a2n5p0j', e.target, 'EbhDO87gC1f14SXqC')
    //       .then((result) => {
    //         console.log(result.text);
    //       }, (error) => {
    //         console.log(error.text);
    //       });
      
    //     e.target.reset();
    //   };
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

  <Row className='my-2'>
    <Col md={12}>
      <div className="map-container-wrapper">
        <div>
          <h2 className='text-center mb-4'>Find Us On Google</h2>
        </div>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3333937230514!2d72.8358561723032!3d18.96087801519336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3b2647412f%3A0x5dbc27d8521ad30f!2z4LC54LGL4LCf4LCy4LGNIOCwnOCwvuCwruCxjSDgsJzgsL7gsK7gsY0g4LCq4LGN4LCv4LC-4LCy4LC44LGN!5e0!3m2!1ste!2sin!4v1686267990722!5m2!1ste!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
>
</iframe>

      </div>
    </Col>
  </Row>
        <Row className='justify-content-center justify-content-md-start my-5'>
        <Col md={6} xs={12}>
 
</Col> 

<Col md={6}  className="">
      <div className="form-container" >
        <form action='https://formspree.io/f/mbjevbyv' method='Post'>
          <div className="form-group my-3 px-3">
           
            <input type="text" id="name" placeholder='username' name="name"  autoComplete='off' required/>
          </div>
          <div className="form-group my-3 px-3">
            <input type="email" id="email" name="email" placeholder='example@gmail.com' autoComplete='off' required/>
          </div>
          
          <div className="form-group my-3 px-3">
            <textarea id="message" name="message" autoComplete='off' required></textarea>
          </div>
          <div className='text-center my-3'>
          <button type="submit " value="Send" className='text-center custom-button'>Submit</button>
          </div>
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
