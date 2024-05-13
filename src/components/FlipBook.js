import React, { useEffect, useState } from 'react';
import "./FlipBook.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CustomNavbar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const flipBook = (elBook) => {
      elBook.style.setProperty("--c", currentPage); // Set current page
      elBook.querySelectorAll(".page").forEach((page, idx) => {
        page.style.setProperty("--i", idx);
        page.addEventListener("click", (evt) => {
          if (evt.target.closest("a")) return;
          const curr = evt.target.closest(".back") ? idx : idx + 1;
          setCurrentPage(curr);
          elBook.style.setProperty("--c", curr);
        });
      });
    };

    document.querySelectorAll(".book").forEach(flipBook);
  }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    // Assuming there are 5 pages, adjust the condition accordingly if needed
    if (currentPage < 9) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <>
    <CustomNavbar/>
    <div className="book">
    <div className="page">
        <div className="front cover">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;समाचार पत्र<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; हिंदी </h1>
            <p>2024.<br/>दूसरा संस्करण</p>
        </div>
        <div className="back">
            <h2>प्रतिसादी</h2>
            <p>पूरी तरह से प्रतिसादी CSS फ्लिप बुक, <code>cqmin</code> इकाई की वजह से।</p>
        </div>
    </div>

    <div className="page">
        <div className="front">
            <p>और भी, पेज की ऊंचाई सबसे अधिक सामग्री में निर्धारित होती है। आपको ध्यान देने की एकमात्र बात यह है कि आप पेज में कितना पाठ डालते हैं।</p>
        </div>
        <div className="back">
            <img src="https://picsum.photos/id/24/600/600" alt="Img 1"/>
        </div>
    </div>

    <div className="page">
        <div className="front">
            <h2>JS कम से कम</h2>
            <p>JavaScript अपनी कम से कम है। बुनियादी रूप में यह केवल प्रारंभिक पृष्ठ सूचकांक सेट करने और पेजों पर क्लिक सुनने के लिए किया जाता है।</p>
        </div>
        <div className="back">
            <p>अतिरिक्त रूप में JavaScript आपको पाठ में एक एंकर लिंक पर क्लिक करने की अनुमति देता है — पेज को पलटने के बिना।</p>
        </div>
    </div>

    <div className="page">
        <div className="front">
            <h2>CSS जादू बनाना</h2>
            <p>फ्लिप बुक की खुली रही (देख रही) पेजें हमेशा एक ही ऊँचाई पर रखी जाती हैं।</p>
        </div>
        <div className="back">
            <p>जैसे कि इस डेमो में, आप मात्रात्मक परिप्रेक्ष्य को बदल सकते हैं और बुक की X धुरी को अधिक प्रभाव के लिए पलट सकते हैं।</p>
        </div>
    </div>
    
    <div className="page">
        <div className="front">
            <p>जरूरी FlipBook का CSS अब भी केवल 30 पंक्तियां हैं, कोई स्वाइप, प्राकृतिक पेज फ्लिप एंगलिंग, जटिल छायांकन आदि नहीं हैं।</p>
        </div>
        <div className="back">
            <p>इस कोड का उपयोग करने के लिए मुक्त बनाने की अनुमति है।</p>
        </div>
    </div>

<div className="page">
  <div className="front">
      
      <p>2024.<br/>दूसरा संस्करण</p>
  </div>
  <div className="back">
      <h2>प्रतिसादी</h2>
      <p>पूरी तरह से प्रतिसादी CSS फ्लिप बुक, <code>cqmin</code> इकाई की वजह से।</p>
  </div>
</div>
<div className="page">
  <div className="front">
      
      <p>2024.<br/>दूसरा संस्करण</p>
  </div>
  <div className="back">
      <h2>प्रतिसादी</h2>
      <p>पूरी तरह से प्रतिसादी CSS फ्लिप बुक, <code>cqmin</code> इकाई की वजह से।</p>
  </div>
</div>
<div className="page">
  <div className="front">
      
      <p>2024.<br/>दूसरा संस्करण</p>
  </div>
  <div className="back">
      <h2>प्रतिसादी</h2>
      <p>पूरी तरह से प्रतिसादी CSS फ्लिप बुक, <code>cqmin</code> इकाई की वजह से।</p>
  </div>
</div>



    <div className="page">
        <div className="front">
            <img src="https://picsum.photos/id/1073/600/600" alt="Img 2"/>
        </div>
        <div className="back cover">
            <h3>बस, यही हैं दोस्तों</h3>
            <p>FlipBook कोड और सामग्री:<br/>पहली यांत्रिक, चल प्रकार की छपाई, जिसने मुद्रित पुस्तकों के बड़े पैमाने पर उत्पादन की अनुमति दी, का आविष्कार जोहान गुटेनबर्ग ने 1450 के आसपास किया था। गुटेनबर्ग द्वारा छपाई शुरू करने के 50 वर्षों के बाद, अनुमानित 500,000 किताबें प्रचलन में थीं, जो पूरे महाद्वीप में लगभग 1,000 प्रेसों में छपी थीं।
            <br/>तस्वीरें द्वारा: picsum.photos</p>
        </div>
    </div>

</div>
<button className="arrow arrow-left" onClick={goToPreviousPage}>
        <FaArrowAltCircleLeft style={{ fontSize: "3em" }} />
      </button>
      <button className="arrow arrow-right" onClick={goToNextPage}>
        <FaArrowAltCircleRight style={{ fontSize: "3em" }} />
      </button>
      <Footer/>
</>
  );
};

export default FlipBook;
