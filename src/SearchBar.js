import React from "react";

const SearchBox = ({ onSearchChange }) => (
  <input
    className="pa2 ba b--green bg-lightest-blue w-100 shadow-5 f3"
    type="search"
    placeholder="search items..."
    onChange={onSearchChange}
  />
);

export default SearchBox;
