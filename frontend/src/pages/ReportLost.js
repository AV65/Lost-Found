import React, { useState } from 'react';
import './ReportLost.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ReportLost = () => {
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
    console.log('Lost item reported:', formData);
    //  Send to backend API
  };

  return (
    <div className="report-lost-container">
        <Navbar />
      <h2 className="reporthead">Report a Lost Item</h2>
      <form onSubmit={handleSubmit} className="report-lost-form">
        <input type="text" name="itemName" placeholder="Item Name" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Where You Lost It" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <textarea name="description" placeholder="Short Description" onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Contact Info" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ReportLost;
