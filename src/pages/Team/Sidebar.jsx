// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./Navbar.css"; 
// import weeding from "../Static/weeding.png"

// function NavBar() {
//   return (
//     <div className='Navbar'>
//              <img src={weeding} alt='Logo' style={{ width: '150px', height: '150px', borderRadius: '20px',backgroundColor:"transparent" }} />

//       <Link to="/">Home</Link>
//       <Link to="/about">ABOUT</Link>
//       <Link to="/contact">CONTACT</Link>
//       <Link to="/service">SERVICES</Link>
//       <Link to="/albums">ALBUMS</Link>
//       <Link to="/initiatives">INITIATIVES</Link>
//       <Link to="/blog">BLOG</Link>
//       <Link to="/shop">SHOP</Link>
//     </div>
//   );
// }

// export default NavBar;



import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"; 
import logo from '../../Images/logo.png';
// import weeding from "../Static/weeding.png"

function Sidebar() {
  return (
    <div className='Dashboard'>
      <div className='sidebar'>
        <img src={logo} alt='Logo' className='logo' />
        <nav>
          <ul>
            <li><Link to="/team/dashboard">HOME</Link></li>
            <li><Link to="/team/profile">KYC</Link></li>
            
            <li><Link to="/team/services">REFERRALS</Link></li>
            {/* {/* <li><Link to="/albums">INQUIRIES</Link></li> */}
            <li><Link to="/team/premium">PREMIUM</Link></li> 
            <li><Link to="/team/feedback">FEEDBACK</Link></li>
           
          </ul>
        </nav>
      </div>
      <div className='main-content'>
        {/* <p>neduweudweinwej</p> */}
      </div>
    </div>
  );
}
export default Sidebar;
