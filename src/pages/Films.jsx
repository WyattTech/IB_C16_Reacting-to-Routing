import React from "react";
// import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"; //Another hook
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="col-md-6 container ">
      <ul className="list-group justify-content-center">
        {films.map((film) => (
          <li
            key={`films-${films.id}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          > <li className="p-1">{`English Title: ${film.title}`}</li>
              {`Original Title: ${film.original_title}`}
            <Link to={`/films/${films.id}`} className="btn btn-outline-primary">
              Film Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;
