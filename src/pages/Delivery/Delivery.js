import React,{useState,useEffect} from 'react'
import "./Delivery.css"
import Footer from '../../components/Footer/Footer';
import DeliveryHeader from '../../components/DeliveryHeader/DeliveryHeader';
import MenuContainer from '../../components/MenuContainer';
import BannerName from '../../components/BannerName';
import SubMenuContainer from '../../components/SubMenuContainer';
import MenuCard from '../../components/MenuCard';
import CartItem from '../../components/CartItem';
import { MenuItems, Items } from '../../components/Data';
import { useStateValue } from '../../components/DeliveryHeader/StateProvider';
import ItemCard from '../../components/ItemCard';
import DebitCard from '../../components/DebitCard';
import { RiWallet3Line } from 'react-icons/ri';
import { BsChatLeftQuoteFill } from 'react-icons/bs';
import { AiFillFileText, AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import {FcSettings} from 'react-icons/fc'
const Delivery = () => {

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart, total, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  return (
    <>
    <div>
  <DeliveryHeader/>
     {/* Left menu */}
     <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'/'} icon = {<AiFillHome/>}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<BsChatLeftQuoteFill/>}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<RiWallet3Line/>}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<MdFavorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AiFillFileText/>}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<FcSettings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
      <main>
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
            <BannerName name={"Jacks-Food"} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

           {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))} 
                 </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {total}
                </p>
              </div>
              <button className="checkOut">Check Out</button>
            </div> 
          )} 
        </div>
      </main>
    </div>
  <Footer/>
  </>
  )
}

export default Delivery
