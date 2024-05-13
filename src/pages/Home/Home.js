import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/NavBar/NavBar';
import HeroImg from '../../components/HeroImg';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Footer from '../../components/Footer/Footer';
// import Login from '../Login';
// import Carousele from '../../components/Carousele';

const Home = () => {
  return (
    <div>
     
      <CustomNavbar />
      <HeroImg />
      {/* <Carousele/> */}
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
