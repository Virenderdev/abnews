import React,{useNavigate} from 'react-router-dom'
import Whatson from "../../pages/Whats on/Whatson";

const CardData = () => {
  const navigate = useNavigate();
  const handleOrderNow = () => {
    
    navigate('/delivery');
  };
    const handleLunch = () => {

     navigate("/dinnermenu")
    };

    const handleBooking = () =>{
      navigate('/booking')
    }
    const cards = [
      {
        // image: jacs,
        title: 'EVENTS',
        description1: `Looking for a place to host after work drinks in Waterloo then we've got plenty of spaces areas for your drinks booking.`,
        description2:'Head to our events page to find out more about booking your spot in Southwark',
        buttonText: 'BOOK NOW',
        handleClick: handleBooking
      },
      {
        // image: jacs2,
        title: ' DELIVERY',
        description1:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tempora numquam facilis fugit ?",
        description2: `We've got he best Thai Menu in Waterloo and we can deliver right to your doorstep.`,
        buttonText: 'ORDER NOW',
        handleClick: handleOrderNow
      },
      {
        // image: jacs3,
        title: 'LUNCH OFFER',
        description1: 'Our authentic Thai food "Johnny Rice" is served MON - FRI  lunch.',
        description2: 'Grab your Takeaway boxes, order your drinks and plot up at a table in our to enjoy your afternoon.',
        buttonText: 'DAILY MENU',
        handleClick: handleLunch
      },
    
    ];
    return cards
   
  
   
  };
  
  export default CardData;
 
  
  