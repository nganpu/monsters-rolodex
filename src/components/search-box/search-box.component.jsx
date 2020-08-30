import React from 'react';
import './search-box.styles.css';

// SearchBox is a functional component
export const SearchBox = ({ placeholder, handleChange}) => (
    <div>
        <input 
            className='search'
            type='search'
            placeholder= {placeholder}
            onChange={handleChange}
        />
    </div>

)