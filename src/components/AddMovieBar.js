import React, { useState } from 'react';

const AddMovieBar = () => {
    const [movie, setMovie] = useState([]);

    const addMovie = () => {
        const inputMovie = document.querySelector('form input[type="text"]').value
        setMovie([...movie, inputMovie]);
    }

    return (
        <div>
            <form action="">
                <input type="text" name="" id="" />
                <input type="button" value="Add Movie" onClick={addMovie} />
            </form>
            <p>
                {movie.map((elt) => {
                    console.log(elt);
                    return
                })}
            </p>
        </div>);
}

export default AddMovieBar;