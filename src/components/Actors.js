import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
      <h1>Actors Page</h1>
    {actors.map((actor, index) => (
      <div key ={index}>
        {actor.name}
        <ul>
          <li>{actor.movies}</li>
        </ul>
      
      </div>
    ))}
  </div>;
}

export default Actors;