import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/NavBar/NavBar';
import HeroImg from '../../components/HeroImg';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <HeroImg />
      <Container fluid>
        <Container>
     
          <About />
        </Container>
      </Container>
      <Menu/>
      <Footer/>
    </div>
  );
};

export default Home;
