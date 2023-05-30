import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, redirectPathName }) => {
  return (
    <ul>
      {movies.map((movie, id) => {
        return (
          <li key={id}>
            <Link to={`/movies/${movie.id}`} state={{ from: redirectPathName }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;