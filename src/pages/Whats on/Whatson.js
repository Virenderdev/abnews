import React from 'react'
import Whatsonheader from "../../Images/whatsonbackground.webp"
import CustomNavbar from "../../components/NavBar/NavBar"
import Footer from '../../components/Footer/Footer'
import whatson1 from "../../Images/whatson1.webp"
import whatson2 from "../../Images/whatson2.webp"
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { RiInstagramFill } from 'react-icons/ri'
import WhatsonheaderCard from '../../components/Cards/WhatsonheaderCard'
import cardData from "../../components/Cards/Cards"
const Whatson = ({cards}) => {
  return (
    <>
    <CustomNavbar />
    <div className='hero'>
        <div className='intro-img' style={{ backgroundImage: `url(${Whatsonheader})` }}></div>
        <div className='mask'></div>
        <div className='content mt-5'>
          <WhatsonheaderCard cards={cardData()} />
        
      

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
