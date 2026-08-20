import React, { useEffect, useState } from 'react';

export default function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies') // or backend URL if configured
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onMovieClick(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}