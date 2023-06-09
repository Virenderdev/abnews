
import React from "react";
import { BsChevronRight } from "react-icons/bs";

function MenuCard({ imgSrc, name, isActive }) {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <BsChevronRight/>
      </i>
    </div>
  );
}

export default MenuCard;
