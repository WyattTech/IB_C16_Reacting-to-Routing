import React from "react";

import { useState, useEffect } from "react"; //Another hook
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([ ]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="col-md-6 container my-5">
      <ul className="list-group justify-content-center">
        {films.map((films) => (
          <li
            key={`get-films-${films.id}`}
            className="list-group-item list-group-item-danger  d-flex justify-content-between align-items-center " 
          > <strong> Movie Title:</strong>
            {films.title}
            <Link to={`/films/${films.id}`} className="btn btn-outline-primary">
             View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;
