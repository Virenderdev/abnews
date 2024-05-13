import React from 'react';
import { FaEye, FaMapMarkerAlt, FaEnvelope, FaUsers, FaLink } from 'react-icons/fa';
import "./Initiatives.css"
import Sidebar from './Sidebar';

const PremiumPlans = () => {
  return (
    <>
    <Sidebar/>
    <div className="p-container" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <header className="header-1">
        <h1>Boost Your Business Online - Premium Plans</h1>
      </header>

      <div className="premium-container" >
        <div className="premium-card">
          <div className="card-header">
            <h2>Free</h2>
          </div>
          <div className="card-body">
            <div className="plan-details">
              <p><strong>Limit of Product / Service posting:</strong> 400</p>
              <p><strong>Product/Services Rank on Priority:</strong> 0</p>
              <p><strong>No. of Cities to display your Business:</strong> 1</p>
              <p><strong>Linking Your Website/Webpage:</strong> No</p>
              <p><strong>Price:</strong> Free</p>
            </div>
            <a href="#" className="b-button">Select</a>
          </div>
        </div>

        <div className="premium-card">
          <div className="card-header">
            <h2>Standard</h2>
          </div>
          <div className="card-body">
            <div className="plan-details">
              <p><strong>Limit of Product / Service posting:</strong> 400</p>
              <p><strong>Product/Services Rank on Priority:</strong> 20</p>
              <p><strong>No. of Cities to display your Business:</strong> 5</p>
              <p><strong>Linking Your Website/Webpage:</strong> Yes</p>
              <p><strong>Price:</strong> $99/month</p>
            </div>
            <a href="#" className="button">Select</a>
          </div>
        </div>
      </div>

      <div className="feature-list">
        <h3>STANDARD PACKAGE Plan included features</h3>
        <ul>
          <li><FaEye /> Visibility Improved: Get top priority for your products & services at IndianYellowPages and improve your chances of attracting more customers</li>
          <li><FaMapMarkerAlt /> Business Listing Display in Multiple Cities: Display your Business Profile Listing in multiple cities on top priority for your Products & Services.</li>
          <li><FaEnvelope /> Direct Business Inquiry Alert: Get alerts in mail & SMS for Direct business inquiries for your products/services sent by customers looking for your business.</li>
          <li><FaUsers /> Customer Inquiry Management: Manage and respond to customer inquiries efficiently.</li>
          <li><FaLink /> Link your website: Link Your Indianyellowpages profile with your website/webpage URL.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default PremiumPlans;
