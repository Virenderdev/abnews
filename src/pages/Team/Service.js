import React, { useState } from 'react';
import "./Services.css"
import Sidebar from './Sidebar';

const ManageProducts = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    specs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
    <Sidebar/>
    <div className="s-container" style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="filter-search" style={{ marginBottom: '20px' }}>
        <label htmlFor="filter" style={{ marginRight: '10px' }}>Filter By:</label>
        <select id="filter" style={{ marginRight: '10px' }}>
          <option value="all">All</option>
          <option value="category">Category</option>
          {/* Add more filter options if needed */}
        </select>
        <label htmlFor="search" style={{ marginRight: '10px' }}>Search by Keyword:</label>
        <input type="text" id="search" style={{ marginRight: '10px' }} />
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Go</button>
      </div>

      <div className="products-services">
        <form className="new-product-form" onSubmit={handleSubmit}>
          <h2>New Referral</h2>
          <div className="input-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="product-name" style={{ marginBottom: '5px' }}>Referral Name:</label>
            <input
              type="text"
              id="product-name"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
          <div className="input-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="product-price" style={{ marginBottom: '5px' }}>Price:</label>
            <input
              type="text"
              id="product-price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
          <div className="input-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="product-description" style={{ marginBottom: '5px' }}>Description:</label>
            <textarea
              id="product-description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}
            ></textarea>
          </div>
          <div className="input-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="product-category" style={{ marginBottom: '5px' }}>Category:</label>
            <select
              id="product-category"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', marginRight: '10px' }}
            >
              <option value="investor">Investor</option>
              <option value="digital">Digital</option>
              <option value="working">Working</option>
            </select>
          </div>
          <div className="input-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="product-specs" style={{ marginBottom: '5px' }}>Specification/Additional Details:</label>
            <textarea
              id="product-specs"
              name="specs"
              value={newProduct.specs}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}
            ></textarea>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Add</button>
        </form>

        <div className="existing-products" style={{ borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <h2>Existing Referral</h2>
          <div className="product" style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc' }}>
            <h3>Corporate Event</h3>
            <div className="input-group" style={{ marginBottom: '10px' }}>
              <label htmlFor="price" style={{ marginBottom: '5px' }}>Price:</label>
              <input type="text" id="price" value="5%" readOnly style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
            </div>
            <div className="input-group" style={{ marginBottom: '10px' }}>
              <label htmlFor="description" style={{ marginBottom: '5px' }}>Description:</label>
              <textarea id="description" readOnly style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}>Corporate event description...</textarea>
            </div>
            <div className="input-group" style={{ marginBottom: '10px' }}>
              <label htmlFor="category" style={{ marginBottom: '5px' }}>Category:</label>
              <input type="text" id="category" value="corporate event" readOnly style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
            </div>
            <div className="input-group" style={{ marginBottom: '10px' }}>
              <label htmlFor="specs" style={{ marginBottom: '5px' }}>Specification/Additional Details:</label>
              <textarea id="specs" readOnly style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}>Corporate event specifications...</textarea>
            </div>
            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Edit</button>
          </div>
          {/* Add more product entries if needed */}
        </div>
      </div>
    </div>
    </>
  );
};

export default ManageProducts;
