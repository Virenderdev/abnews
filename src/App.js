import React from 'react'
// import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Whatson from './pages/Whats on/Whatson';
import EventHire from './pages/EventHire/EventHire';
import Menu from './pages/Menu/Menu';
import ContactUs from './pages/Contact Us/ContactUs';
import DinnerMenu from './components/Menus/DinnerMenu';
import Booking from './components/Booking/Booking';
import Login from'./pages/Login';
import Register from './pages/Register';
import FlipBook from './components/FlipBook';
import { AuthProvider } from './context/AuthContext';
import ProfilePage from './pages/Team/dashboard';
import CompanyProfile from './pages/Team/Profile';
import ManageProducts from './pages/Team/Service';
import FeedbackForm from './pages/Team/Feedback';
import ProtectedRoute from './utils/ProtectedRoute';
import PremiumPlans from './pages/Team/Initiatives';
// import MainDashboard from './Dashboard/views/admin/default'
// import NFTMarketplace from './Dashboard/views/admin/marketplace'
// import Profile from './Dashboard/views/admin/profile'
// import DataTables from './Dashboard/views/admin/dataTables'
// import RTL from './Dashboard/views/admin/rtl'
// import SignInCentered from './Dashboard/views/auth/signIn'
// import { Icon } from "@chakra-ui/react";
// import {
//   MdBarChart,
//   MdPerson,
//   MdHome,
//   MdLock,
//   MdOutlineShoppingCart,
// } from "react-icons/md";





function App() {
  return (
<>
<AuthProvider>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/whatson' element={<Whatson/>}/>
      <Route path='/events' element={<EventHire/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    
      <Route path='/dinnermenu' element={<DinnerMenu/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/flipbook' element={<FlipBook/>}/>
      <Route path='/team/dashboard' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
      <Route path='/team/profile' element={<ProtectedRoute><CompanyProfile/></ProtectedRoute>}/>
      <Route path='/team/services' element={<ProtectedRoute><ManageProducts/></ProtectedRoute>}/>
      <Route path='/team/feedback' element={<ProtectedRoute><FeedbackForm/></ProtectedRoute>}/>
      <Route path='/team/premium' element={<ProtectedRoute><PremiumPlans/></ProtectedRoute>}/>
      
     </Routes>
     </AuthProvider>
    </>
  );
}

export default App;
