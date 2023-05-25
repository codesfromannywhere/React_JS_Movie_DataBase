import React, { useState } from 'react';
import movieData from '../data/movieData'
// import MovieList from './MovieList';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState([])
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        movieData.filter((elt) => {
            return elt.title.match(searchInput);
        });
        console.log(searchInput);
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Search movie"
                value={searchInput} onChange={handleChange} />
            {/* <button >Search</button> */}
        </div>
    );
}

export default SearchBar;