import React from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import menuRightImage from '../../Images/menusideImage.webp';
import additionalImage from '../../Images/jOHNNY rICE WHITE.webp';
import image from "../../Images/partyPic.webp";
import MenuCardsImages from '../../components/Cards/MenuCardsImages';
import "./Menu.css"
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate()
  const handleDinner =() =>{
   navigate('/dinnermenu')
  }

  const handleBooking = () =>{
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
      <Row id="menu" className="my-2 justify-content-center justify-content-md-start">
      <Col md={8} xs={12} className="position-relative">

  <div  style={{
  backgroundImage: `url(${menuRightImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  
    <img src={additionalImage} alt="Additional Image" className="additional-image" />
  </div>
</Col>

        
        <Col md={4}  className='justify-content-center '>
        <div className='justify-content-center p-2'>
          <h6 className='mt-5 fw-bold text-center'>MENUS</h6>
          <p className='fs-5 '>Our authentic Thai food "Johnny Rice" is served Monday - Friday lunch.</p>
          <p className='fs-5'>Grab your Takeaway boxes, order your drinks and plot up at a table in our outdoor area to enjoy your afternoon.</p>
          <p className='fs-5'>Check out our Instagram and Twitter to keep up to date with the daily menu. </p>
           <div className="d-flex flex-wrap justify-content-between">
          <button className="mt-3  custom-button btn-sm " onClick={handleDinner}>DINNER</button>
<button className="mt-3   custom-button btn-sm"  onClick={handleDinner}>DRINKS</button>
<button className="mt-3 custom-button btn-sm"  onClick={handleDinner}>COCKTAIL</button>
</div>
          <p className='mt-5 mb-0'>JACKS KITCHEN:</p>
          <p className='m-0'>MON - FRI 12PM - 14:30PM // 5PM - 10PM</p>
          <p className='m-0'>SAT: 5PM - 10PM</p>
          <p>SUNDAY: CLOSED</p>
          </div>
        </Col>
      </Row>
      <Row className='mt-3'>
       <Col>
         <div  style={{
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: "10px"
}}>
          <h1 className='text-white fw-bold'>BOOK AN AREA</h1>
          <button className="mt-3 text-white me-4 white-button" style={{  borderColor: '#fff' }} onClick={handleBooking}>MAKE A BOOKING</button>
          <h1  className='text-white fw-bold mt-4'>HIRE THE WHOLE BAR?</h1>
          <button  className="mt-3 text-white me-4 white-button" onClick={handleMail}>PRIVATE-HIRE-INQUIRY</button>
         </div>
        </Col>
      </Row>
      <Row>
        
      <MenuCardsImages />
      </Row>
 


    
   </>
  );
};

export default Menu;
