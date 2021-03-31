import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                type="text"
                placeholder="Type Keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
