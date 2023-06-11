import React,{useEffect } from 'react'
import {BsBarChart, BsSearch} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi';
import "./DeliveryHeader.css"
import { useStateValue } from "./StateProvider";
const DeliveryHeader = () => {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);
  return (
    <header>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
      alt=""
      className="logo"
    />

    <div className="inputBox">
      <BsSearch className="searchIcon" />
      <input type="text" placeholder="Search"  className='border-0'/>
    </div>

    <div className="shoppingCart">
      <GiShoppingCart className="cart" />
      <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
        <p>{cart ? cart.length : ""}</p>
      </div>
    </div>

    <div className="profileContainer">
      <div className="imgBox">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
          alt=""
        />
      </div>
      <h2 className="userName">Virender</h2>
    </div>

    <div className="toggleMenu">
      <BsBarChart className="toggleIcon" />
    </div>
  </header>
);
}


export default DeliveryHeader
