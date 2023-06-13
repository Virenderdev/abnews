import React, { useEffect, useState } from 'react';
import "./ContactUs.css"
import contactimage from "../../Images/contactimage.webp"
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from '../../components/NavBar/NavBar';
import foodPic from "../../Images/foodPic.webp"
import Footer from '../../components/Footer/Footer';
import InlineError from './InlineError';
import {validateEmail, validateFUllName, validateMessage} from "./Validation"
import { contactConfig } from '../../components/Data';
import axios from "axios";
import {motion} from 'framer-motion'
const ContactUs = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [fullNameError, setFullNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [messageError, setMessageError] = useState()
    const [isEmailSent, setIsEmailSent] = useState(false)


     const handleSubmit = () =>{
       axios.post("http://localhost:3001/api/sendMessage",{fullName,email,message})
       .then((res)=>console.log(res.data.data))
       .catch(error=>console.log(error.response.data.message))
     }
  
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
        height: '100vh',
       
    
      }}
    > 
   <Container>
    <Row className='justify-content-center align-items-center'>
      <Col md={5} className='content-main  '>
        <h1 className='text-center text-white fw-bold'>AUTHENTIC THAI FOOD MADE IN INDIA</h1>
      </Col>
      <Col md={6} className='content-text'>
        <p>Our Thai Kitchen offers some of the best food in Waterloo.</p>
        <p>For lunch, we serve a daily changing lunch menu with a selection of Thai dishes to choose from.</p>
        <p>This can be enjoyed in the pubs with a cold beer or our Thai Shack at The Ring acts as the perfect place to drop in and grab a takeaway in Southwark.​</p>
        <p>Our evening menu extends to more authentic Thai classics and a few of our hidden favourites to accompany them.</p>
        <p>So if you are looking for a Thai dining experience in South London then head into one of our venues</p>
      </Col>
    </Row>
    </Container>
  </div>
</div>




 
      <Container>
        <Row className=' mt-3 mb-5'>
        <Col lg={8}>
         <h1 className='display-4 mb-4 bold'>Contact Us</h1>
</Col> 
</Row>
<Row className='sec_sp'>
  <Col lg={5} className='mb-5'>
    <h3 className='color_sec py-4'>Get in Touch</h3>
    <address>
      <strong>Email: jacksfood@gmail.com</strong>
      <br/>
      <br/>
      <p>
        <strong>Phone: +62 *** ***</strong>
      </p>
    </address>
    <p>{contactConfig.description}</p>
  </Col>

<Col lg={7} >
      <div className="form-container" >
        <form  className='contact_form w-100' onSubmit={handleSubmit}>
          <Row>
            <Col lg={6} className='form-group'>
              <motion.div whileHover = {{scale:0.9}} whileTap={{scale:0.8}}>
            <motion.input className='form-control rounded-0' type="text" id="name" placeholder='username' value={fullName} onChange={(e)=> setFullName(e.target.value)} autoComplete='off' required whileHover={{scale: 1.2}} transition= {{duration: 0.3}}  style={{ boxShadow: 'none' }}/>
                 {fullNameError && <InlineError error={fullNameError}/>}
                 </motion.div>
            </Col >
            <Col lg={6} className="form-group">
            <motion.div whileHover = {{scale:0.9}} whileTap={{scale:0.8}}>
            <motion.input className='form-control rounded-0' type="email" id="email" value={email}   onChange={(e)=>setEmail(e.target.value)}placeholder='example@gmail.com' autoComplete='off' required whileHover={{scale:1.2}} transition={{duration: 0.3}}  style={{ boxShadow: 'none' }}/>
             </motion.div>
            </Col>
          </Row>
           
        
       
        
          
          <motion.div whileHover = {{scale:1.1}} whileTap={{scale:0.8}}>
            <textarea className="form-control rounded-0" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} autoComplete='off' required placeholder='message here...' rows={6}  style={{ boxShadow: 'none' }}></textarea>
         </motion.div>
         <br/>
         <Row>
          <Col lg={12} xs={12} className='form-group'>
            {isEmailSent ? (
              <p>Thank you for your message. We will get back to you soon.</p>
            ) : (
              <motion.div whileHover={{scale:1.0}} whileTap={{scale:0.9}}>
          <button type="submit "  value="Send" className='text-center custom-button'>Submit</button>
          </motion.div>
 ) }
          </Col>
         </Row>
         
        </form>
      </div>
      </Col>
      </Row>
      </Container>
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
  </Row >

    {/* </div> */}
 <Footer/>
   </>
  );
};

export default ContactUs;
