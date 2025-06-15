import React, { useState } from 'react';
import './ReportFound.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ReportFound = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    location: '',
    date: '',
    description: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Found item reported:', formData);
    // TODO: Send to backend API
  };

  return (
    
    <div className="report-found-container">
        <Navbar />
      <h2 className="reportfoundhead">Report a Found Item</h2>
      <form onSubmit={handleSubmit} className="report-found-form">
        <input type="text" name="itemName" placeholder="Item Name" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Where You Found It" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <textarea name="description" placeholder="Short Description" onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Contact Info" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ReportFound;
