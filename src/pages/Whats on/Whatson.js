import React from 'react'
import Whatsonheader from "../../Images/whatsonbackground.webp"
import CustomNavbar from "../../components/NavBar/NavBar"
import Footer from '../../components/Footer/Footer'
import whatson1 from "../../Images/whatson1.webp"
import whatson2 from "../../Images/whatson2.webp"
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { RiInstagramFill } from 'react-icons/ri'
const Whatson = () => {
  return (
    <>
    <CustomNavbar />
    <div
    style={{
      backgroundImage: `url(${Whatsonheader})`,
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
    <Row className="my-3">
      <Col md={4}>
        <h1 className='text-white'>EVENTS</h1>
        <p className='text-white'>Looking for a place to host after work drinks in Waterloo then we've got plenty of spaces areas for your drinks booking.</p>
        <p className='text-white'>Head to our events page to find out more about booking your spot in Southwark</p>
        <Button  variant="outline-primary" className="mt-3 text-white " style={{  borderColor: '#fff' }}>BOOK NOW</Button>
         
      </Col>
      <Col md={4}>
        <h1 className='text-white'>DELIVERY</h1>
        <p  className='text-white'>Fancy a Thai dinner but cant make it to Jacks Bar, fear not.</p>
        <p className='text-white'>We've got he best Thai Menu in Waterloo and we can deliver right to your doorstep.</p>
        <Button  variant="outline-primary" className="mt-3 text-white " style={{  borderColor: '#fff' }}>ORDER  NOW</Button>
      </Col>
      <Col md={4}>
        <h1 className='text-white'>LUNCH OFFER</h1>
        <p  className='text-white'>Our authentic Thai food "Johnny Rice" is served MON - FRI  lunch.</p>
        <p className='text-white'>Grab your Takeaway boxes, order your drinks and plot up at a table in our to enjoy your afternoon.</p>
        <Button  variant="outline-primary" className="mt-3 text-white " style={{  borderColor: '#fff' }}>DAILY MENU</Button>
      </Col>
    </Row>
    </Container>
    <Row>
        <Col md={12} className="d-flex justify-content-center align-items-center" style={{ marginTop: "9rem" }}>
  <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
    <BsFacebook style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} />
    <AiFillTwitterCircle style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} />
    <RiInstagramFill style={{ color: '#fff', width: '40px', height: '40px', margin: '0 5px' }} />
  </div>
  </Col>
  </Row>
    </div>


<Row className="py-3">
  <Col md={6}>
    <img src={whatson1} alt='image1' className='img-fluid' />
  </Col>
  <Col md={6}>
    <img src={whatson2} alt='image2' className='img-fluid' />
  </Col>
</Row>

    <Footer/>
    </>
  )
}


export default Whatson
