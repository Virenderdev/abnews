import React, {useState, useEffect} from 'react';
import "./dashboard.css"
import Sidebar from './Sidebar';
import useAxios from  "../../utils/useAxios"
import { jwtDecode} from "jwt-decode"
import {AuthContext} from "../../context/AuthContext"
import Navbar from './topbar'
import { Col, Container, Row } from 'react-bootstrap';
function ProfilePage() {
//   const [response, setResponse] = useState("")
//   const api = useAxios()
//   const token = localStorage.getItem("authTokens")

//   const decode = jwtDecode(token)
//   let  user_id = decode.user_id
//   let username = decode.username
//   let email = decode.email
//   let full_name = decode.full_name



//   useEffect(() => {
//      const fetchData = async () => {
//       try {
//         const response = await api.get("/test/'")
//         setResponse(response.data.response)
// } catch (error) {
//        console.log(error)
//        setResponse("Something went wrong")
//       }
//      }

//      fetchData()
//   },[])
  return (
    <>
    <Sidebar/>
    <div className="d-container">
     
     
      <div className="profile-details">
      <Navbar />
        <h2>User Profile</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> </p>
          {/* {full_name}</p>
          <p><strong>Email:</strong>{email}</p> */}
          {/* <p><strong>Phone Number:</strong> 123-456-7890</p> */}
        </div>
        <a href="#" className="edit-profile">Edit Profile Details</a>
      </div>

      {/* <div className="product-overview">
        <h2>Product/Service Overview</h2>
        <div className="product-options">
          <div className="product-option">
            <label htmlFor="approval">Approval Status:</label>
            <div className="checkbox-group">
              <input type="checkbox" id="approval"/> <label htmlFor="approval">Approved</label>
              <input type="checkbox" id="rejection"/> <label htmlFor="rejection">Rejected</label>
            </div>
          </div>
          <div className="product-option">
            <label htmlFor="price-option">Price Option:</label>
            <div className="checkbox-group">
              <input type="checkbox" id="with-price"/> <label htmlFor="with-price">With Price</label>
              <input type="checkbox" id="without-price"/> <label htmlFor="without-price">Without Price</label>
            </div>
          </div>
          <div className="product-option">
            <label htmlFor="photo-option">Photo Option:</label>
            <div className="checkbox-group">
              <input type="checkbox" id="with-photo"/> <label htmlFor="with-photo">With Photo</label>
              <input type="checkbox" id="without-photo"/> <label htmlFor="without-photo">Without Photo</label>
            </div>
          </div>
        </div>
      </div> */}

      <div className="tell-us">
        <h2>Tell Us What You Need</h2>
        <input type="text" placeholder="Enter Product / Service Name"/>
        <textarea placeholder="Requirement Details"></textarea>
        <button>Get Quote From Suppliers</button>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;
