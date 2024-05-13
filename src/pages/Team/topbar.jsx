import React from 'react';
import "./topbar.css"; 

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">Your Logo</a>
        </div>
        <div className="navbar-profile">
          {/* <img src="" alt="Profile Picture" className="avatar"/> */}
          <a href="#">Logout</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;