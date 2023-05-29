import React, { useState } from "react";
import { getMovieByQuery } from "routes/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

 const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log("searchParams", searchParams.get("query"));

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = event.currentTarget.elements.search.value;
    console.log("event", event.currentTarget.elements.search.value)
     getMovieByQuery(value)
      .then((res) => {
        setMovies(res);
        // console.log("res",res);
      })
    
    setSearchParams({ query: value });
  }

  useEffect(() => {
    if (searchParams.get("query")) {
     getMovieByQuery(searchParams.get("query"))
      .then((res) => {
        setMovies(res);
        // console.log("res",res);
      })
   } 
  },[])
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">
          Search
        </button>
      </form>
      <ul>
        {movies?.map((movie, id) => {
          return (
            <li key={id}>
              <Link to={`/movies/${movie.id}`} state ={{from: location}}>
                {movie.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default MovieSearch;