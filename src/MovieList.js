import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {

  const [movies, setMovies] = useContext(MovieContext);


  return (
    <div>
      {
        movies.map(movie => (
          <Movie movieName={movie.name} key={movie.id} price={movie.price} />
        )
        )
      }
    </div>
  )
}

export default MovieList