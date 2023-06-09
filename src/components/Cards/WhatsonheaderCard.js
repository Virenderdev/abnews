

import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';

const WhatsonheaderCard = ({ cards }) => {
  return (
    <Container >
      <Row className='mt-5'>
        {cards.map((card, index) => (
          <Col key={index} md={4} p={1}  style={{ padding: '5px' }}>
            <Card className='bg-transparent text-white  text-center mt-5 mb-5 h-100 border-0'>
              <Card.Body>
                <Card.Title className="fw-bold fs-2 text-center">{card.title}</Card.Title>
                <Card.Text className='text-start mt-5'>{card.description1}</Card.Text>
                <Card.Text  className='text-start'>{card.description2}</Card.Text>
              
                <button className='mt-4  text-center white-button'onClick={card.handleClick}>
                  {card.buttonText}
                </button>
           
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhatsonheaderCard;
