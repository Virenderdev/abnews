import React,{useRef} from 'react'
import CustomNavbar from "../../components/NavBar/NavBar"
import eventheader from '../../Images/eventbackground.webp'
import Footer from '../../components/Footer/Footer'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import event1 from "../../Images/eventpic1.webp";
import event2 from "../../Images/eventpic2.webp";
import event3 from "../../Images/eventpic3.webp";
import event4 from "../../Images/eventpic4.webp";
import magnetic from "../../Images/magneticwall.jpg";
import eventcard1 from "../../Images/eventcard1.webp"
import eventcard2 from "../../Images/eventcard2.webp"
import eventcard3 from "../../Images/eventcard3.webp"
import { Link } from 'react-router-dom';
import Login from '../Login';
import Team from "../Team"

import "./EventHire.css"
import { useNavigate } from 'react-router-dom';
import Register from '../Register';


const EventHire = () => {
  const rowRef = useRef(null);
  const navigate = useNavigate()
  const handleScroll = () => {
    rowRef.current.scrollIntoView({ behavior: 'smooth' });
  };

   const handleBooking = () => {
        navigate('/booking')
   }
   const handleMail = () => {
    const recipient = 'virender.digitalshakha@gmail.com';
    const subject = 'Private Hire Inquiry';
    const body = 'Hello, I would like to inquire about private hire.';
    
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
    <CustomNavbar />
    <div className="hero">

    
    <div className='content' >
    <hr/>
    
  <Col md={5} className="text-md-start">
 
  <h2 className='fw-bold text-start career mb-3'>Careers</h2>
   
  </Col>
 
</div> 
</div>
<div className='container'>
  <Row className="mt-5">
    <div class='col-md-9'>
    <p className='career-sub-heading'>Independent, deeply reported journalism is the fuel that powers a healthy and engaged society. We are covering the most important topics of our time and telling stories that would otherwise go untold.</p>
    </div>
  </Row>
  </div>
  <hr/>
  
  <div
  style={{
    backgroundImage: `url(${magnetic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    backgroundColor: 'rgba(0, 0, 0, 0.8)' // Adjust the opacity value (0.8) to make it darker or lighter
  }}
>   
  <Col md={6} className="mx-auto text-start my-5 d-flex align-items-center">
    <div className="text-center justify-content-center">
      <h1 className="text-white fw-bold ">Magnetic wall</h1>
      <p className="text-white mt-4 p-2 fs-4">
  Are you passionate about making a difference? Seize the opportunity to be a catalyst for change in the world of journalism. Register now to embark on a journey where your voice matters, your stories resonate, and your impact is felt. Together, let's shape the future of media and inspire generations to come.
</p>

<div className="d-flex justify-content-around">
  <Link to="../register"><button className="mt-5 mr-2 white-button hover-border">Register As a Team</button></Link>
  <Link to="../login"><button className="mt-5 ml-2 white-button">Login As Team</button></Link>
  {/* <Link to="/login" className="mt-5 ml-2 white-button">Login As Team</Link> */}
</div>

    </div>
  </Col>
</div>

  
  
 


<Container className='py-3'>
  <Row>
    <Col md={4}>
      <Card>
        <Card.Img src="https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/masters-in-journalism.jpg" alt="" />
      </Card>
      <h3 class="mt-3">Journalism</h3>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Img src="https://t3.ftcdn.net/jpg/06/25/63/74/360_F_625637450_W3MtE1aupAvtkHBStIqpZEGHfS1y1jmv.jpg" alt="" />
      </Card>
      <h3 class="mt-3">Our People</h3>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" alt="" />
      </Card>
      <h3 class="mt-3">Company</h3>
    </Col>
  </Row>
  <Team/>
</Container>

  <Footer/>
  </>
  )
}

export default EventHire
