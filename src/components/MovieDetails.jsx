import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, Route, Routes, useLocation, useParams} from "react-router-dom";
import { getMovieByID } from "../routes/api";

const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  console.log("loc", location);
  const [movieRender, setMovieRender] = useState({})

  useEffect(() => {
    getMovieByID(params.id)
      .then((res) => {
        if (res) {
          setMovieRender(res)
        }
      });
  }, []);

  const fullPath = `https://image.tmdb.org/t/p/w500`;
  const releaseDate = new Date(movieRender.release_date).getFullYear();
  const genreName = movieRender.genres && movieRender.genres.map((genre) => genre.name).join(", ");
  const movieNav = [
    { href: `/movies/${params.id}/cast`, text: 'Cast' },
    { href: `/movies/${params.id}/reviews`, text: 'Reviews' }
  ]
  return (
    <div>
      <Link to={location.state?.from ?? "/"}>
        <button
        type="button">
        Go back
      </button>
      </Link>
     

      <div className="main_description">
        <img src={`${fullPath}${movieRender.poster_path}`} width='200' />
        <div className="main_thumb">
          <h2>{movieRender.title}({releaseDate})</h2>
          <p>User Score : {movieRender.vote_average}</p>
          <h2>Overview</h2>
          <p>{movieRender.overview}</p>
          <h2>Genres</h2>
          <p>{genreName}</p>
        </div>
      </div>

      <div className="movie_layout">
        <h3>Additional information</h3>
        {movieNav.map(({ href, text }) =>
          <Link to={href} key={href} className='movie_links'>
            {text}
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  )
}

export default MovieDetails;
