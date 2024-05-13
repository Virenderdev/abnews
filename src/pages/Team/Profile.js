import React, { useState } from 'react';
import './Profile.css'; 
import Sidebar from './Sidebar';

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('kyc');
  const [formData, setFormData] = useState({
    // Initial state for storing form data
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
   
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
   
    alert('Form submitted successfully!');
  };

  return (
    <>
    <Sidebar />
    <div className="M-container">
     
      <div className="tabs">
        <button className={activeTab === 'kyc' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabChange('kyc')}>KYC Details</button>
        <button className={activeTab === 'bank' ? 'tab-button active' : 'tab-button'} onClick={() => handleTabChange('bank')}>Bank Details</button>
      </div>

      
      <form onSubmit={handleSubmit}>
        
        {activeTab === 'kyc' && (
          <div className="section">
          <h2>KYC Details</h2>
          <div className="input-group">
            <label htmlFor="company-name">Company Name *:</label>
            <input type="text" id="company-name" value={formData['company-name'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="contact-name">Contact Person *:</label>
            <input type="text" id="contact-name" value={formData['contact-name'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="designation">Designation *:</label>
            <input type="text" id="designation" value={formData['designation'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="address">Address (Building No/Floor, Street, Landmark) *:</label>
            <input type="text" id="address" value={formData['address'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="state">State *:</label>
            <input type="text" id="state" value={formData['state'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="city">City *:</label>
            <input type="text" id="city" value={formData['city'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="locality">Locality:</label>
            <input type="text" id="locality" value={formData['locality'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="zip-code">Postal/Zip Code *:</label>
            <input type="text" id="zip-code" value={formData['zip-code'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="website">Company Website:</label>
            <input type="url" id="website" value={formData['website'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Mobile No *:</label>
            <input type="tel" id="mobile" value={formData['mobile'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="alternate-mobile">Whatsapp No:</label>
            <input type="tel" id="alternate-mobile" value={formData['alternate-mobile'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
        
          <div className="input-group">
            <label htmlFor="alternate-email">Email:</label>
            <input type="email" id="alternate-email" value={formData['alternate-email'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
          {/* <div className="input-group">
            <label htmlFor="landline">Landline No:</label>
            <input type="tel" id="landline" value={formData['landline'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div> */}
          {/* <div className="input-group">
            <label htmlFor="std-code-landline">STD Code:</label>
            <input type="text" id="std-code-landline" value={formData['std-code-landline'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div> */}
          {/* <div className="input-group">
            <label htmlFor="phone-landline">Phone No(s):</label>
            <input type="tel" id="phone-landline" value={formData['phone-landline'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div> */}
          <div className="input-group">
            <label htmlFor="alternate-landline">Alternate Landline No:</label>
            <input type="tel" id="alternate-landline" value={formData['alternate-landline'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="std-code-alt-landline">STD Code:</label>
            <input type="text" id="std-code-alt-landline" value={formData['std-code-alt-landline'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
          <div className="input-group">
            <label htmlFor="phone-alt-landline">Phone No(s):</label>
            <input type="tel" id="phone-alt-landline" value={formData['phone-alt-landline'] || ''} onChange={handleChange} style={{ width: '100%', padding: '5px' }}/>
          </div>
        </div>
        )}

        {/* Bank Details */}
        {activeTab === 'bank' && (
          <div className="section">
          <h2>Bank Details</h2>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={formData.name || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
            <span className="error-message" id="name-error">Please enter a name.</span>
          </div>
          <div className="input-group">
            <label htmlFor="bank-account">Bank Account No:</label>
            <input type="text" id="bank-account" value={formData['bank-account'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
            <span className="error-message" id="bank-account-error">Please enter a bank account number.</span>
          </div>
          <div className="input-group">
            <label htmlFor="re-enter-bank-account">Re-Enter Bank Account No:</label>
            <input type="text" id="re-enter-bank-account" value={formData['re-enter-bank-account'] || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
            <span className="error-message" id="re-enter-bank-account-error">Please re-enter the bank account number.</span>
          </div>
          <div className="input-group">
            <label htmlFor="ifsc">IFSC:</label>
            <input type="text" id="ifsc" value={formData.ifsc || ''} onChange={handleChange} required style={{ width: '100%', padding: '5px' }} />
            <span className="error-message" id="ifsc-error">Please enter an IFSC code.</span>
          </div>
          <div className="input-group">
            <label htmlFor="cancelled-cheque">Upload Cancelled Cheque:</label>
            <input
              type="file"
              id="cancelled-cheque"
              onChange={handleFileChange} // Event handler for file change
              accept=".jpg, .jpeg, .png, .pdf" // Specifies accepted file types
              style={{ width: '100%', padding: '5px' }} // Inline CSS for width and padding
            />
            <span className="error-message" id="cancelled-cheque-error">
              No file chosen. Please upload a valid cancelled cheque.
            </span>
          </div>
        </div>
        
        
        )}

        {/* Button */}
        <div className="button-group">
          <button type="submit">Save Details</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CompanyProfile;
