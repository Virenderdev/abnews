import React, { useState } from 'react';
import bookingBack from "../../Images/bookingBackground.png"
import { Card, CardImg, CardText, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
function Booking() {
  const [date,setDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] =useState(false)
  const [members, setMembers] = useState(2)
  const [time, setTime] = useState('03:00 PM')
  
 

  const handleNextDay = () =>{
    setDate(new Date(date.getFullYear(),date.getMonth(), date.getDate() +1))
  }
  const handlePreviousDay = () =>{
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() -1))
  }

  const handleDateChange = (selectedDate) =>{
      setDate(selectedDate);
      setShowDatePicker(false)
  }

  const handlePreviousMember = () =>{
    if(members > 1){
      setMembers(members -1)
    }
  }
  const handleNextMember = () =>{
    if(members < 20){
      setMembers(members +1)
    }
  }

  const handlePreviousTime = () =>{
     const previousTime = updateTime(-30)
     setTime(previousTime)
  }

  const handleNextTime = () => {
    const nextTime = updateTime(+30)
    setTime(nextTime)
  }

  const updateTime = (minutes) => {
    const currentTime = new Date(`2000-01-01 ${time}`);
    currentTime.setMinutes(currentTime.getMinutes() + minutes);
    const updatedTime = currentTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return updatedTime;
  };

  const handleSearch = () => {
     
  }
  return (
    <div id="dw-wrapper" className="booking_back" style={{ backgroundImage: `url(${bookingBack})` }}>
      <div className="booking_card">
      <Row>
        <Col className="justify-content-center">
          <Card>
            <CardImg src={bookingBack} alt='booking' />
            <Card.Body>
             
              <div className="slider justify-between">
                  <BsChevronLeft className="arrow left" onClick={handlePreviousDay}/>
                   
               
                  <span className="day" onClick={()=> setShowDatePicker(true)}>{date.toLocaleDateString('default', { day: "numeric", month: 'long', year: 'numeric' })}</span>
                  <BsChevronRight className="arrow right" onClick={handleNextDay}/>
                </div>
                {
                  showDatePicker && (
                    <div className="datepicker_container">
                    <DatePicker selected={date} onChange={handleDateChange} inline className='text-center'/>
                    </div>
                  )
                }
              
           
              <hr/>
              <div className='slider'>
              <BsChevronLeft className={`arrow left ${members === 1 ? 'disabled' : ''}`} onClick={handlePreviousMember}/>
              <span className='day'>{members}</span>
              <BsChevronRight className={`arrow right ${members === 20 ? 'disabled' : ""}`} onClick={handleNextMember}/>

              </div>
              <hr />
              <div className="slider">
             <BsChevronLeft className='arrow left'onClick={handlePreviousTime} />
             <span className='day'>{time}</span>
             <BsChevronRight className='arrow right' onClick={handleNextTime}/>
             </div>

              <hr/>
              <button className='booking_search_button' onClick={handleSearch}>Search</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Booking;
