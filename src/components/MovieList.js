import movieData from '../data/movieData'
import MovieItem from './MovieItem';
import { useState } from 'react';

// console.log(movieData);

const MovieList = () => {
    const [movie, setMovie] = useState(movieData)

    // sort Asecending
    const sortAscending = () => {
        const yearAscending = [...movie]
        movieData.sort((a, b) => a.year - b.year);
        setMovie(yearAscending)
    }


    // sort Desecending
    const sortDescending = () => {
        const yearDescending = [...movie]
        movieData.sort((a, b) => b.year - a.year);
        setMovie(yearDescending)
    }

    // sort Rate
    const sortRate = () => {
        const bestRate = [...movie]
        movieData.sort((a, b) => b.rate - a.rate);
        setMovie(bestRate)
    }

    //sort A-Z
    const sortAZ = () => {
        const az = [...movie]
        movieData.sort((a, b) =>
            a.title > b.title ? 1 : -1,);
        setMovie(az)
    }

    //sort Z-A
    const sortZA = () => {
        const za = [...movie]
        movieData.sort((a, b) =>
            a.title > b.title ? -1 : 1,);
        setMovie(za)
    }


    return (
        <div>
            <section>
                <button onClick={sortAscending}>Sort by Date Ascending</button>
                <button onClick={sortDescending}>Sort by Date Descending</button>
                <button onClick={sortRate} >Best Rate</button>
                <button onClick={sortAZ} >A-Z</button>
                <button onClick={sortZA}>Z-A</button>
            </section>
            <section className="movie-grid">
                {movieData.map((movie, i) => {
                    return (
                        <MovieItem
                            key={i}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            duration={movie.duration}
                            rate={movie.rate}
                            genre={movie.genre}
                        />
                    )
                })}

            </section>
        </div>
    );
}

export default MovieList;

