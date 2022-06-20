import React from "react";

import './searchbox.style.scss';

const SearchBox = ({placeholder, onSearchChange}) => (
    <input
        className="search"
        type='search'
        placeholder={placeholder}
        onChange={onSearchChange}
    />
);

export default SearchBox;