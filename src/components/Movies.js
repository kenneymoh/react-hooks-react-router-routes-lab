import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => (
      <div key = {index}>
        {movie.title}
        {movie.time}
        <ul><li>
          {movie.genres}
          </li>
          </ul>
      </div>
    ))}
  </div>;
}

export default Movies;