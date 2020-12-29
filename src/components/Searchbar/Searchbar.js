import React, { useState } from "react";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const searchChange = (e) => {
    e.preventDefault();

    setInputValue(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();

    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={searchSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={searchChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
