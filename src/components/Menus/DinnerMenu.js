import React from 'react';
import CustomNavbar from '../NavBar/NavBar';
import foodPic from "../../Images/foodPic.webp"
import additionalImage from "../../Images/jOHNNY rICE WHITE.webp"
import "./custom.css"
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
const DinnerMenu = () => {
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
    > <img src={additionalImage} alt="Additional Image" className="additional-image" />
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
  <div className="food_menu ">
      <div className='food_menu_title'>
        <h2 className='text-center '>THAI SNACKS</h2>
        <h5>Add Curry Sauce £1.5</h5>
        <h4>Mixed Platter £9/pp <span className='text-small'>(MIN. 2 PEOPLE)</span></h4>
        <p>Spicy chicken bits, prawn toast, spring rolls, chicken satay, corn cakes & prawn crackers</p>
        <Row className='py-4'>
  <Col md={6}>
    <div className='menu-item'>
      <h4>Khow Kiep £3.50</h4>
      <p>A basket of crunchy thai style prawn crackers seved with sweet chilli dipping sauce</p>
    </div>
    <div className='menu-item'>
      <h4>Por Pia Pak £6.5</h4>
      <p>Mixed vegetable spring rolls with a sweet chilli sauce</p>
    </div>
    <div className='menu-item'>
      <h4>Sesame Chicken Wings £6.90</h4>
      <p>Six sticky sweet, sour & spicy sesame seed covered chicken wings</p>
    </div>
    <div className='menu-item'>
      <h4>Chiang Mai Chicken £6.90</h4>
      <p>Strips of traditionally marinated chicken breast served with sweet chilli dipping sauce</p>
    </div>
    <div className='menu-item'>
      <h4>Khanom Jeeb £7</h4>
      <p>Pork Thai dumplings served with thick dim sum sauce</p>
    </div>
  </Col>
  <Col md={6}>
    <div className='menu-item'>
      <h4>Chiang Mai Chicken £6.90</h4>
      <p>Strips of traditionally marinated chicken breast served with sweet chilli dipping sauce</p>
    </div>
    <div className='menu-item'>
      <h4>Khanom Pang Na Goong £7</h4>
      <p>Crunchy sesame toast filled with fresh prawn and Thai seasoning</p>
    </div>
    <div className='menu-item'>
      <h4>Calamari £7.5</h4>
      <p>Deep fried squid served with sriracha chilli dipping sauce</p>
    </div>     
    <div className='menu-item'>
      <h4>Gai Satay £6.90</h4>
      <p>Marinated chicken breast skewers with a delicious peanut delicious peanut sauce</p>
    </div>
    <div className='menu-item'>
      <h4>Gai Satay £6.90</h4>
      <p>Marinated chicken breast skewers with a delicious peanut sauce</p>
    </div>
  </Col>
</Row>

      </div>
    </div>
     <Footer/>
    </>
  )
}

export default DinnerMenu
