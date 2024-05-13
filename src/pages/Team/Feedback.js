import React from 'react';
import "./Feedback.css"
import Sidebar from './Sidebar';

const FeedbackForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <Sidebar/>
    <div className="feedback-container">
      <div className="feedback-title">Feedback / Suggestion</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback-type">Select Feedback Type</label>
          <select id="feedback-type" name="feedback-type">
            <option value="">Please select</option>
            <option value="suggestion">Suggestion</option>
            <option value="appreciation">Appreciation</option>
            <option value="bug/error">Bug/Error Report</option>
            <option value="purchase requirement">Purchase Requirement</option>
            <option value="complaint">Complaint</option>
            <option value="interested in services">Interested in Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="feedback-message">Write your Feedback</label>
          <textarea id="feedback-message" name="feedback-message" maxLength="3000" placeholder="Your Message (3000 Character Maximum)"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default FeedbackForm;
