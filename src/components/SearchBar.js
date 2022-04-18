import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmitForm }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleChangeSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // calls onSubmitForm callback in parent component
    onSubmitForm(searchTitle);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="search-bar-form">
        <input
          value={searchTitle}
          onChange={handleChangeSearchTitle}
          className="search-bar"
          placeholder="Begin typing book title..."
          data-testid="search-bar-input"
        ></input>
        <button
          onClick={handleSubmitForm}
          className="search-bar-button"
          data-testid="search-bar-button"
        >
          GO
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
