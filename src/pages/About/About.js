import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid>
      <Container>
        <Row>
        <Col md={12} className='mt-5 mb-5'id="about">
              <p className='mt-5 fs-5'>
                If you fancy stopping by, propping up the bar and having a drink in Waterloo, then Jacks is the place to be!
                If you’re looking for a spot for after-work beers in Southwark then be sure to drop in. Located near the Southbank we have an extensive wine list and authentic Thai menu to match. Our offer extends beyond the pub with takeaway and delivery on our food menu.
              </p>
            </Col>
          <Col>
        
            <h6 className='text-center fw-bold'>OUR STORY</h6>
            <p className='mt-4 fs-5'>Jack’s Bar and Kitchen is the brainchild of Ryan and John McElhinney. We are located at 96 Isabella Street (behind Southwark Tube) SE1 8DD. The original Jack’s was opened in Ireland in 1970 by their father Jack so the boys decided to pay tribute to their father by re-opening the original almost forty years on. Jack's is a bar for birthdays, catching up with friends, lunch on our patio in our winter garden, craft beer, cocktails and delicious Thai food.</p>
            <p className='mt-5 fs-5 mb-5'>We cater for many events including wedding receptions so enquire nowemailing jacksbookings@windmilltaverns.com</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
