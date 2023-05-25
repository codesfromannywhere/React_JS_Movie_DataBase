import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    // console.log(props);

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <h4>{props.director}</h4>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            {props.genre.map((elt) => <p>{elt}</p>)}
            {/* // hier gebe ich an welcher Parameter ersetzt werden soll! Der Link wir "neu" besetzt bzw. vervollständigt */}
            <Link to={`/${props.id}`}>Show more</Link>
        </div >);
}

export default MovieItem;