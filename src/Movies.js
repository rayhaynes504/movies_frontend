import React, { useEffect, useState} from 'react';


function Movies(props) {
const [movies, setMovies] = useState()

useEffect(() => {
    fetch('https://kr-movie-api.herokuapp.com/api/movies/')
    .then(res => res.json())
    .then(res => {
        setMovies(res)
    })
    .catch(err => console.log(err))
}, [])

if (!movies) {
    return <p>loading</p>
}
    return (
        <div>
            {movies.map(movie => {
                return(
                <div className='movie-div' key={Math.random() * 1000}>
                  <h2>{movie.title}</h2>
                    <img src={movie.movie_poster} alt={movie.title}/>
                    <p>Genre: {movie.genre}</p>
                    <p>Release Date: {movie.release_date}</p>
                </div>
                )
            })}
        </div>
    );
}

export default Movies;