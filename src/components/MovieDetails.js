import { useParams } from "react-router-dom";
import movieData from '../data/movieData';
// console.log(movieData);

const MovieDetails = () => {
    const movieParams = useParams();
    // console.log(movieParams);

    /*     // UseParams gibt uns ein Objekt der vervollständigten Route aus der APP.js zurück. Es gibt den Wert des Params(Parameters) zurück bzw. eines Objekts */

    return (
        /*         // movieid steht für "1"
         */
        <section>
            <h3>{movieData[movieParams.movieid].title}</h3>
            <p>{movieData[movieParams.movieid].director}</p>
        </section>
    );
}

export default MovieDetails;