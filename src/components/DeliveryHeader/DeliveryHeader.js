import React,{useState} from 'react';
import'./DeliveryHeader.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {BsInfoCircle, BsSearch} from "react-icons/bs";
import {AiOutlineHeart, AiTwotoneStar} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io"
import delivery from "../../Images/deliverybackground.webp"
const DeliveryHeader = () => {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };

    const menu = [
        {
          name: 'Thai Snacks',
          items: [
            { name: 'Item 1', description: 'Description 1', image: 'image1.jpg' },
            { name: 'Item 2', description: 'Description 2', image: 'image2.jpg' },
          ],
        },
        {
          name: 'Small Plates',
          items: [
            { name: 'Item 3', description: 'Description 3', image: 'image3.jpg' },
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

        const filteredItems = selectedButton
        ? menu.find((item) => item.name === selectedButton)?.items || []
        : [];
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
    <div className="end">
      <Button variant="outline-primary">LOG IN</Button>
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
  <Button variant="outline-primary" className='d-flex flex-column'>
    <span className='text-start'><BsInfoCircle /> Info</span>
    {/* <span className="flex-grow-1"></span> */}
    {/* <IoIosArrowForward /> */}
  

  <span className="additional-text d-flex flex-column text-muted">
    Map, allergen, and hygiene rating
  </span>
  </Button>
</span>
</p>
<p>
  <span>
  <Button variant="outline-primary" className='d-flex flex-column'>
    <span className='text-start'><AiTwotoneStar />4.8 Excellent</span>
    {/* <span className="flex-grow-1"></span> */}
    {/* <IoIosArrowForward /> */}
  

  <span className="additional-text d-flex flex-column text-muted">
    See all 500 reviews
  </span>
  </Button>
</span>
</p>
</Col>
 
  </Row>
  </Container>
  <hr/>
  <Row>
  <Col md={12}>
    <div className="d-flex flex-row justify-content-center">
      {menu.map((button, index) => (
        <Button key={index} onClick={() => handleButtonClick(button.name)}  className={selectedButton === button.name ? 'active' : ''}style={{ width: 'auto', height: '30px', margin: '0 5px',color:"#00CCBC" }} className='bg-transparent border-0 border-rounded'>
          {button.name}
        </Button>
      ))}
    </div>
  </Col>
</Row>



    </div>
    <div>
    <Row>
        <Col md={3}>
        <div className="d-flex flex-wrap">
        {filteredItems.map((item, index) => (
          <div key={index} className="card d-flex">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
            <img src={item.image} alt={item.name} className="card-img-top" />
          </div>

        ))}
        </div>
        </Col>
    </Row>
      </div>
      </>
  )
}

export default DeliveryHeader
