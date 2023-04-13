// import movieData from '../data/movieData'
// // const sort = movieData.sort()
// // console.log(sort)
// // import MovieList from './MovieList';
// // console.log(movieData);


// const FilterBar = () => {

//     // sort Asecending
//     const sortAscending = [...movieData].sort((a, b) => a.year - b.year);
//     console.log(sortAscending);

//     // sort Desecending
//     const sortDescending = [...movieData].sort((a, b) => b.year - a.year);
//     console.log(sortDescending);

//     // sort Rate
//     const sortRate = [...movieData].sort((a, b) => a.rate - b.rate);
//     console.log(sortRate);

//     //sort A-Z
//     const sortAZ = [...movieData].sort((a, b) =>
//         a.title > b.title ? 1 : -1,);
//     console.log(sortAZ);

//     //sort Z-A
//     const sortZA = [...movieData].sort((a, b) =>
//         a.name > b.name ? -1 : 1,);
//     console.log(sortZA);

//     return (
//         <section>
//             <button onChange={sortAscending}>Sort by Date Ascending</button>
//             <button>Sort by Date Descending</button>
//             <button>Best Rate</button>
//             <button onChange={sortAZ}>A-Z</button>
//             <button>Z-A</button>
//         </section>
//     );
// }

// export default FilterBar;