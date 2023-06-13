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
import {motion} from 'framer-motion'

const MenuCardsImages = () => {
  const cardImages = [jacs1, jacs2, jacs3, jacs4, jacs5, jacs6, jacs7, jacs8];

  return (
    <>
      <Row className='my-2 mx-auto'>
        {cardImages?.map((card, index) => (
          <Col key={index} md={3}  style={{ padding: '5px'}}>
            <motion.div
            whileHover = {{scale : 1.1 ,zIndex:1}}
            whileTap={{scale: 0.9}}
            style={{position: 'relative'}}
               >
            <Card className='bg-transparent text-white '>

              <motion.img src={card} alt='Card' className='image-card img-fluid' style={{ height: '300px' }} whileHover={{scale: 1.2}} transition={{duration : 0.3}}/>
            </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MenuCardsImages;
