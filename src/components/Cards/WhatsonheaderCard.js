// Whatson.js

import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';

const WhatsonheaderCard = ({ cards }) => {
  return (
    <Container >
      <Row className='my-5'>
        {cards.map((card, index) => (
          <Col key={index} md={4} p={1} style={{ padding: '5px' }}>
            <Card className='bg-transparent text-white'>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description1}</Card.Text>
                <Card.Text>{card.description2}</Card.Text>
                <Button variant='outline-light' className='mt-3'>
                  {card.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhatsonheaderCard;
