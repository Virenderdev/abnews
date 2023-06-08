import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
  return (

        <section className='footer'>
            <Container className='text-md-start mt-5'>
                <Row>
                    <Col md={3}>
                    <h2 className='fs-3'>LOCATIONS</h2>
                    <p className='mb-1'>JACKS BAR</p>
                    <p className='mb-1'>MC & SONS</p>
                    <p className='mb-1'>THE RING</p>
                    <p>THE KINGS ARMS</p>
                  
                    </Col>
                    <Col md={3}>
                    <h2 className='fs-3'>OPENING TIMES</h2>
                    <p className='mb-0'>MON - WED: 11:30AM - 11PM</p>
                    <p className='mb-0'>THU: 11:30AM - 11:30PM</p>
                    <p className='mb-0'>FRI: 11:30AM - 12AM</p>
                    <p className='mb-0'>SAT: 4PM - 12AM</p>
                    <p>SUN: CLOSED</p>

                    </Col>
                    <Col>
                    <h2 className='fs-3'>CONTACT</h2>
                    <p className='mb-0'>96 ISABELLA STREET, LONDON SE1 8DD</p>
                    <p className='mb-0'>TEL: 020 7928 0678</p>
                    <p className='mb-0'>EMAIL: JACKS@WINDMILLTAVERNS.COM</p>
          
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                    <h3 className='text-center'>
                      Copyrights reserved by 2023 @
                      <a href="https://www.digitalshakha.in/" class="footer-links" target="_blank">digitalshakha</a>
                    </h3>
                    </Col>
                </Row>
            </Container>
        </section>
      
    
  )
}

export default Footer
