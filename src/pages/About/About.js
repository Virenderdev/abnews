import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid>
      <Container>
        <Row>
        <Col md={12} className='mt-5 mb-5'id="about">
              <p className='mt-5 fs-5'>
              If you're seeking the latest news and updates from across the Akhand Bharat region, look no further than Akhand Bharat Daily News! Our platform offers comprehensive coverage of national events, regional developments, and local stories, keeping you informed and engaged with the pulse of our great nation.
                </p>
            </Col>
          <Col>
        
            <h6 className='text-center fw-bold'>OUR JOURNEY</h6>
            <p className='mt-4 fs-5'>Akhand Bharat Daily News is dedicated to providing accurate and reliable news coverage, rooted in journalistic integrity and ethical reporting practices. Founded by visionary leaders with a passion for serving the people of Akhand Bharat, our platform strives to uphold the principles of democracy, freedom of expression, and social justice.</p>
            <p className='mt-5 fs-5 mb-5'>Join us on this journey as we navigate the ever-changing landscape of Akhand Bharat, together shaping the future of our nation. For news tips, inquiries, or advertising opportunities, reach out to us at info@akhandbharat.com</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
