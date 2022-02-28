import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
        <div className="searchBar">
            <input type="text" placeholder="Search here..." />
            <i className="fas fa-search"></i>
        </div>
  )
}

export default Searchbar;