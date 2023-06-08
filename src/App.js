import React from 'react'
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Whatson from './pages/Whats on/Whatson';
import EventHire from './pages/EventHire/EventHire';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import ContactUs from './pages/Contact Us/ContactUs';
import DinnerMenu from './components/Menus/DinnerMenu';





function App() {
  return (
<>
  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/whatson' element={<Whatson/>}/>
      <Route path='/events' element={<EventHire/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/delivery' element={<Delivery/>}/>
      <Route path='/dinnermenu' element={<DinnerMenu/>}/>
      

     </Routes>
     
    </>
  );
}

export default App;
