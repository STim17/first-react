import React from 'react';
import './search.style.css';

export const Search = ({ selfText, myChange }) => {

    return (
        <input
            className='search'
            type='search'
            placeholder={selfText}
            onChange={myChange}
        />
    )
}