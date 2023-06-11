import React,{useRef} from 'react'
import CustomNavbar from "../../components/NavBar/NavBar"
import eventheader from '../../Images/eventbackground.webp'
import Footer from '../../components/Footer/Footer'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import event1 from "../../Images/eventpic1.webp";
import event2 from "../../Images/eventpic2.webp";
import event3 from "../../Images/eventpic3.webp";
import event4 from "../../Images/eventpic4.webp";
import magnetic from "../../Images/magneticwall.webp";
import eventcard1 from "../../Images/eventcard1.webp"
import eventcard2 from "../../Images/eventcard2.webp"
import eventcard3 from "../../Images/eventcard3.webp"

import "./EventHire.css"
import { useNavigate } from 'react-router-dom';
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
    <div className='dark'
    style={{
      backgroundImage: `url(${eventheader})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    
    }}
  ></div>
    <div className='content'>
  <Row>
  <Col md={5} className="mx-auto text-center text-md-start">
  <h2 className='text-white fw-bold text-center'>EVENTS & PRIVATE HIRE</h2>
  <p className='text-white mt-4'>Looking for a bar to host your drinks in Waterloo or an area for an event in Southwark? We can help.</p>
  <p className='text-white mt-3'>We’re pretty flexible here at Jacks, let us know what you are after, and we’ll make it happen. We’ve got a number of spaces to drink and dine, with some available to book for private hire.</p>
  <p className='text-white'>Scroll down to take a look at our spaces.</p>
  <div className="d-flex justify-content-center justify-content-around mt-5">
    <button className="white-button" onClick={handleScroll}>OUR SPACES</button>
    <button className="white-button" onClick={handleBooking}>BOOK NOW</button>
  </div>
</Col>

</Row>
</div>
  </div>
  <Row className='py-3' ref={rowRef}>
  <Col md={3}>
  <Card className="text-center">
    <Card.Img variant="top" src={event1} alt="card1" className="img-fluid" />
    
  </Card>
</Col>
    <Col md={3}>
    <h2 className='text-center mt-5'>Outside</h2>
    <p className='text-center px-4 mt-5'>Our outdoor area is the cosy spot for an event on Waterloo. We've got a full cover and plenty of heaters for when things get cold.</p>
    </Col>
    <Col md={3}>
      <Card className='text-center'>
    <Card.Img variant='top' src={event2} alt='card1'  className='img-fluid'/>
    </Card>
    </Col>
    <Col md={3}>
     
    <h2 className='text-center mt-5'>Back Room</h2>
    <p className='text-center px-4 mt-5'>Located towards to back of the bar, our back room offers a great setting for hosting events. The semi private space pays homage to the McElhinney family.</p>
    </Col>
    <Col md={3}>
    <h2 className='text-center mt-5'>Bar Area</h2>
    <p className='text-center px-4 mt-5'>We've got a number of standing and seated spaces nestled in our Southwark Bar.</p>
    </Col>
    <Col md={3}>
    <Card className='text-center'>
    <Card.Img variant='top' src={event3} alt='card1' className='img-fluid'/>
    </Card>
    </Col>
    <Col md={3}>
    <h2 className='text-center mt-5'>Dining</h2>
    <p className='text-center px-4 mt-5'>Offering a tasty Thai menu we have dedicated spaces for both dinner and lunch in Waterloo.</p>
    </Col>
    <Col md={3}>
      <Card className='text-center'>
    <img variant ='top' src={event4} alt='card1' className='img-fluid'/>
    </Card>
    </Col>
  </Row>
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
    
    }}
  >
   
   <Col md={6} className="mx-auto text-start my-5 d-flex align-items-center ">
  <div className="text-center justify-content-center">
    <h1 className="text-white fw-bold ">Magnetic wall</h1>
    <p className="text-white mt-4  p-2">Whether it's your birthday, a leaving do, a hen do, or a work related event, we've got you covered! Jack's Bar has 2 magnetic walls (inside and outside). So make your day even more special by adding a message and personalising your event!</p>
    <div className="justify-content-center">
      <button  className="mt-5 white-button" onClick={handleMail}>Email</button>
    </div>
  </div>
</Col>

     
  
  </div>
  {/* import { Container, Row, Col, Card } from 'react-bootstrap'; */}


<Container className='py-3'>
  <Row>
    <Col md={4}>
      <Card>
        <Card.Img src={eventcard1} alt="" />
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Img src={eventcard2} alt="" />
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Img src={eventcard3} alt="" />
      </Card>
    </Col>
  </Row>
</Container>

  <Footer/>
  </>
  )
}

export default EventHire
