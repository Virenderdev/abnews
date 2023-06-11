// import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import {MdAdd,MdFavorite} from 'react-icons/md'
import React, { useState } from "react";
import { actionType } from "./reducer";
import { Items } from "./Data";
import { useEffect } from "react";
import { useStateValue } from "./DeliveryHeader/StateProvider";
import { BsFillStarFill } from 'react-icons/bs';
let cartData = [];

function ItemCard({ itemId, imgSrc, name, price, ratings }) {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = useState(false);
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <MdFavorite className='MuiSvgIcon-root'/>
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <BsFillStarFill />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <MdAdd/>
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
