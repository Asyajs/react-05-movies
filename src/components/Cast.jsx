import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "routes/api";

 const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    getMovieCast(params.id)
      .then((res) => {
        setCast(res)
        console.log("result", res);
      })
      .catch(err => console.log(err));
    }, [params.id]);
    
    // console.log("cast", cast);
    // console.log("params", params);
  return (
    <>
      <div>
        <ul className="cast-list">
          {cast?.map(({ id, profile_path, name, character }) => (
              <li key={id} className="cast-item">
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  width="100px" />
                <p>{name}</p>
                <p>
                  Character:
                  <p>{character}</p>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Cast;