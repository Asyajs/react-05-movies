import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie, id) => {
        return (
          <li key={id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;