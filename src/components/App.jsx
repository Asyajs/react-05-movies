import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { Cast } from "./Cast";
// // import { Header } from "./Header";
// // import { Home } from "./Home";
// // import { MovieDetails } from "./MovieDetails";
// // import { MovieSearch } from "./MovieSearch";
// // import { Review } from "./Review";

const Cast = lazy(() => import("./Cast"));
const Header = lazy(() => import("./Header"));
const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("./MovieDetails"));
const MovieSearch = lazy(() => import("../pages/MovieSearch"));
const Review = lazy(() => import("./Review"));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="movies" element={<MovieSearch/>}/>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Review/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}


