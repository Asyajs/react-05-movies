import MovieList from "components/MovieList";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { trandingMovies, trandingMoviesV2 } from "../routes/api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();
  // console.log("loc", location);

  useEffect(() => {
    trandingMovies().then((res) => {
      
      if (res) {
        setPopularMovies(res)
      }
    });

  }, [])

  return (
    <div className="tranding_box">
      <h3 className="tranding_title">Tranding today</h3>
      <MovieList movies={popularMovies} redirectPathName={location.pathname} />
    </div>
  );
};

export default Home;