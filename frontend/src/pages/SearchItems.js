// src/pages/SearchItems.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SearchItems.css'; // optional, for styling

const SearchItems = () => {
  return (
    <div>
      <Navbar />
      <section className="search-page">
        <h1>Search Items</h1>
        <div className="category-tabs">
          <button className="tab">General Categories</button>
          <button className="tab">Items Found</button>
          <button className="tab">Items Lost</button>
        </div>

        <div className="search-results">
          <p>Select a category above to browse items.</p>
          {/* Later: Show filtered items based on selected tab */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchItems;
