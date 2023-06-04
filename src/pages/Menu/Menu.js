import React from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import menuRightImage from '../../Images/menusideImage.webp';
import additionalImage from '../../Images/jOHNNY rICE WHITE.webp';
import image from "../../Images/partyPic.webp";
import MenuCardsImages from '../../components/Cards/MenuCardsImages';


const Menu = () => {
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

        
        <Col md={4}  className='justify-content-center'>
        
          <h6 className='mt-5 fw-bold text-center'>MENUS</h6>
          <p className='fs-5'>Our authentic Thai food "Johnny Rice" is served Monday - Friday lunch.</p>
          <p className='fs-5'>Grab your Takeaway boxes, order your drinks and plot up at a table in our outdoor area to enjoy your afternoon.</p>
          <p className='fs-5'>Check out our Instagram and Twitter to keep up to date with the daily menu. </p>
        
          <Button variant="outline-primary" className="mt-3 text-black me-4" style={{  borderColor: 'black' }}>DINNER</Button>
<Button variant="outline-primary" className="mt-3 text-black me-4" style={{  borderColor: 'black' }}>DRINKS</Button>
<Button variant="outline-primary" className="mt-3 text-black " style={{  borderColor: 'black' }}>COCKTAIL</Button>
          <p className='mt-5'>JACKS KITCHEN:</p>
          <p>MON - FRI 12PM - 14:30PM // 5PM - 10PM</p>
          <p>SAT: 5PM - 10PM</p>
          <p>SUNDAY: CLOSED</p>
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
          <Button  variant="outline-primary" className="mt-3 text-white me-4" style={{  borderColor: '#fff' }}>MAKE A BOOKING</Button>
          <h1  className='text-white fw-bold mt-4'>HIRE THE WHOLE BAR?</h1>
          <Button  variant="outline-primary" className="mt-3 text-white me-4" style={{  borderColor: '#fff' }}>PRIVATE-HIRE-INQUIRY</Button>
         </div>
        </Col>
      </Row>
      <MenuCardsImages />
 


    
   </>
  );
};

export default Menu;
