
const MovieItem = (props) => {
    // console.log(props);

    return (<div>
        <p>{props.id}</p>
        <p>{props.title}</p>
        <p>{props.year}</p>
        <p>{props.director}</p>
        <p>{props.duration}</p>
        <p>{props.rate}</p>
        {props.genre.map((elt) => <p>{elt}</p>)}
    </div>);
}

export default MovieItem;