import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const InquiriesMessages = () => {
  // Function to handle folder management link click
  const handleManageFoldersClick = (event) => {
    event.preventDefault();
    // Add functionality to open folder management section here
    alert('Folder management functionality will be added here.');
  };

  const selectFolder = (event) => {
    if (event && event.target) {
      const selectedFolder = event.target.value;
      // You can add logic here to handle the selected folder
      console.log(`Selected folder: ${selectedFolder}`);
    } else {
      console.error('Event object or target is undefined');
    }
  };

  return (
    <div className="inquiries-container" style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="inquiries-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Inquiries & Messages</div>
      <div className="search-section" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <input type="text" className="search-input" placeholder="Search by Name" style={{ width: 'calc(50% - 10px)', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }} />
        <button style={{ padding: '8px', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          <FaSearch style={{ color: '#fff' }} /> {/* Adding the search icon */}
        </button>
      </div>
      <div className="inbox-section" style={{ borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <div className="inbox-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Inbox</div>
        {/* Add folder options */}
        <div className="folder-options">
          <label htmlFor="folder-select">Select Folder:</label>
          <select id="folder-select" onChange={selectFolder}>
            <option value="inbox">Inbox</option>
            <option value="sent">Sent Box</option>
            <option value="junk">Junk</option>
            <option value="trash">Trash</option>
            <option value="my-folder">My Folder</option>
          </select>
        </div>
        <a href="#" className="manage-folders-link" onClick={handleManageFoldersClick}>Manage Folders</a>
        <p className="empty-message">Sorry! Currently, you have no business inquiries.</p>
        <h3>Add your Referral to get Global Business Inquiries</h3>
        <a href="#" className="add-products-button" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', textDecoration: 'none' }}>Add Products</a>
      </div>
    </div>
  );
};

export default InquiriesMessages;
