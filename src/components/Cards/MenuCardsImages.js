import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import jacs1 from '../../Images/Jacks3_edited.webp';
import jacs2 from '../../Images/thumbnail_IMG_4252.webp';
import jacs3 from '../../Images/image3.webp';
import jacs4 from '../../Images/thumbnail_IMG_4250.webp';
import jacs5 from '../../Images/thumbnail_IMG_0326.webp';
import jacs6 from '../../Images/thumbnail_IMG_0332.webp';
import jacs7 from '../../Images/thumbnail_Image.webp';
import jacs8 from '../../Images/thumbnail_IMG_0320.webp';
import './MenuCardImages.css'; 

const MenuCardsImages = () => {
  const cardImages = [jacs1, jacs2, jacs3, jacs4, jacs5, jacs6, jacs7, jacs8];

  return (
    <>
      <Row className='my-2'>
        {cardImages?.map((card, index) => (
          <Col key={index} md={3} p={1} style={{ padding: '5px' }}>
            <Card className='bg-transparent text-white zoom-image'>
              <Card.Img src={card} alt='Card' className='image-card img-fluid' style={{ height: '300px' }} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MenuCardsImages;
