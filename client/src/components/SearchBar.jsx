import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="🔍 Enter city name"
        required
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
