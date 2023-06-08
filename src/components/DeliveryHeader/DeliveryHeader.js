import React,{useState} from 'react';
import'./DeliveryHeader.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {BsFillBasketFill, BsInfoCircle, BsSearch} from "react-icons/bs";
import {AiOutlineHeart, AiTwotoneStar} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io"
import delivery from "../../Images/deliverybackground.webp"
import image1 from "../../Images/crackers.webp";
import springimage from "../../Images/springroll.webp"
import corncake from '../../Images/corncake.jpeg';
import {motion} from "framer-motion"
const DeliveryHeader = () => {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
    const handlelogin = (e) => {
        //  e.preventDefault()
  
    
    };
    const menu = [
        {
          name: 'Thai Snacks',
          items: [
            { name: 'Prawn Crackers', 
            description: 'A basket of crunchy thai style prawn crackers served with sweet chilli droppong souce', image: image1},
          ],
        },
        {
          name: 'Small Plates',
          items: [
            { name: 'Spring Rolls', 
            description: 'Six vegetable spring rolls served with sweet chilli dipping souce',
             amount:'150', 
             image: springimage
            },
            { name: 'Corn Cakes', 
            description: 'Sweetcorn Thai cakes,with a sweet chilli..',
            amount:'150',
             image: corncake 
            },
            { name: 'Item 4', description: 'Description 4', image: 'image4.jpg' },
            { name: 'Item 4', description: 'Description 4', image: 'image4.jpg' },
            { name: 'Item 4', description: 'Description 4', image: 'image4.jpg' },
            { name: 'Item 4', description: 'Description 4', image: 'image4.jpg' },
            { name: 'Item 4', description: 'Description 4', image: 'image4.jpg' },
          ],
        },
        {
          name: 'Noodle (Mains)',
          items: [
            { name: 'Item 5', description: 'Description 5', image: 'image5.jpg' },
            { name: 'Item 6', description: 'Description 6', image: 'image6.jpg' },
          ],
        },
        {
            name: 'Curry (Mains)',
            items: [
              { name: 'Item 5', description: 'Description 5', image: 'image5.jpg' },
              { name: 'Item 6', description: 'Description 6', image: 'image6.jpg' },
            ],
          },
          {
            name: 'Stir Fry and Rice',
            items: [
              { name: 'Item 5', description: 'Description 5', image: 'image5.jpg' },
              { name: 'Item 6', description: 'Description 6', image: 'image6.jpg' },
            ],
          },
          {
            name: 'Extras',
            items: [
              { name: 'Item 5', description: 'Description 5', image: 'image5.jpg' },
              { name: 'Item 6', description: 'Description 6', image: 'image6.jpg' },
            ],
          },
          {
            name: 'Special',
            items: [
              { name: 'Item 5', description: 'Description 5', image: 'image5.jpg' },
              { name: 'Item 6', description: 'Description 6', image: 'image6.jpg' },
            ],
          },
          {
            name: 'Vegan Menu',
            items: [
              { name: 'Item 5', description: 'Description 5', image: 'image5.jpg' },
              { name: 'Item 6', description: 'Description 6', image: 'image6.jpg' },
            ],
          },
      ];

       
  return (
    <>
    <div>
        <div className="search-login-container sticky">
   <div className="center">
  <div className="search-input">
    <BsSearch className="search-icon" />
    <input type="search" placeholder="Search Jacks Thai Kitchen - Mumbai" />
  </div>
</div>
 
  </div>
  <hr/>
  <Container>
  <Row>
  <Col md={4}>
  <Card>
  
    <Card.Img variant="top" src={delivery} alt="delivery" className='img-fluid'/>
    <div className="icon-container">
      <AiOutlineHeart className="icon" />
    </div>
  </Card>
</Col>

<Col md={4}>
  <h2 className='fw-bold'>Jacks Bar Thai Kitchen - Southwark</h2>
  <p>Thai·Chicken·Ramen</p>
  <p>Closes at 21:45·£2.50 delivery·£7.00 minimum</p>
  <p>
  <span>
  <motion.div  className='box'
  whileHover={{ scale: 1.1 }} 
    transition={{ type: "spring",
     stiffness: 400, 
     damping: 10 }}>
      <button className='d-flex flex-column map-button'>
    <span className='text-start'><BsInfoCircle /> Info</span>
     <span className="flex-grow-1"></span> 

   <IoIosArrowForward />
  

  <span className="additional-text d-flex flex-column text-muted">
    Map, allergen, and hygiene rating
  </span>
  </button>
  </motion.div>
</span>
</p>
<p>
<motion.div className='box'
     whileHover={{scale:1.1}}
     transition={{type: "spring",
      stiffness: 400,
    damping: 10}}
    >
  <button className='d-flex flex-column map-button'>
  
    <span className='text-start'><AiTwotoneStar />4.8 Excellent</span>
     

  <span className="additional-text d-flex flex-column text-muted">
    See all 500 reviews
  </span>

  </button>
  </motion.div>
</p>
</Col>
 
  </Row>
  </Container>
  <hr/>
  <Row>
  <Col md={12}>
    <div className="d-flex flex-row justify-content-center menu-container sticky">
      {menu.map((button, index) => (
        <Button key={index}  className={selectedButton === button.name ? 'active' : ''}style={{ width: 'auto', height: '30px', margin: '0 5px',color:"#00CCBC" }}    className='bg-transparent border-0 border-rounded'>
          {button.name}
        </Button>
      ))}
    </div>
  </Col>
</Row>


<hr/>
    </div>

      {/* Display filtered items */}
      <div className="filtered-items">
        <Container>
          <Row>
        

            {/* Display all filtered items */}
            <Col md={8} >
              <div className="filtered-items-container">
              {menu.map((item, index) => (
  <div key={index}>
    <h4 className="card-title mb-3">{item.name}</h4>
    <div className="card-container d-flex flex-wrap">
      {item.items.map((menuItem, menuIndex) => (
        <div className="card d-flex" key={menuIndex}>
          <div className="card-body d-flex flex-row">
            <div className="text-container col-md-8">
              <span className="card-text mb-0">{menuItem.description}</span>
              <p className="card-text text-muted">{menuItem.amount}</p>
            </div>
            <img src={menuItem.image} alt={menuItem.name} className="card-img-top" />
          </div>
        </div>
      ))}
    </div>
  </div>
))}


              </div>
            </Col>
                {/* Sticky second card */}
                <Col md={4} className="sticky-card">
              <Card>
              <div className='card-body checkout'>
                <div className='text-center'>
               <BsFillBasketFill style={{width:"30px",height:"30px"}}/>
               <p className='fs-4' style={{color:'#abadad'}}>Your basket is empty</p>
              
               </div>
               <div className="d-flex justify-content-center mt-4">
  <button type="button" className="checkout-button" disabled>
    Go To Checkout
  </button>
</div>
              </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    
  



     
      
      </>
  )
}

export default DeliveryHeader
