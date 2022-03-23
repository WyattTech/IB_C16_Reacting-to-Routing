import React from "react";
import { useState, useEffect } from "react"; //Another hook
import { Link, useParams } from "react-router-dom";

const FilmsDetails = () => {
  const { filmsid } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmsid}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((e) => console.log(e.message));
  }, [filmsid]);



  return (
    <div className="col-md-6 container my-5">
      <div className="card-deck">
        <section id="film" className="card-deck" />
        <div className="card-body">
          <div className="card">
            <img
              src={details.movie_banner}
              alt="movie-banner"
              className="img-fluid"
            />
            <div className="content m-3 card-text">
              <div className="fs-3 mb-2">
                <strong> Title: </strong> {details.title}
              </div>
              <div className="fs-4 mb-1">
                <strong> Original Title: </strong> {details.original_title}
              </div>
              <div className="fs-5 my-1">
                <strong> Director: </strong>
                {details.director}
              </div>
              <div className="fs-6">
                <span className="fw-bold mb-2 card-text"> Synopsis: </span>
                {details.description}
              </div>
              <div className="my-4">
                <div className="badge bg-primary fs-6 text-white">
                  Film Rating: {details.rt_score}
                </div>
                
                <Link to="/films" className="m-5 gap-2">Back</Link>
              </div>
            </div>
          </div>
        </div>
        <section />
      </div>
    </div>
  );
};

export default FilmsDetails;
