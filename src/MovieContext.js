import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: '$20',
      id: 23124
    },
    {
      name: "Game Of Thrones",
      price: '$20',
      id: 2566124
    },
    {
      name: "Inception",
      price: '$20',
      id: 23524
    },

  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}