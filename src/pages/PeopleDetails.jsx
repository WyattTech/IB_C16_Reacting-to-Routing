import React from "react";
import { useState, useEffect } from "react"; //Another hook
import { Link, useParams } from "react-router-dom";
import picture from "../images/placeholderImage.png";

const PeopleDetails = () => {
  const { personid } = useParams();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((e) => console.log(e.message));
  }, [personid]);

  return (
    <div className="col-md-6 container my-5">
      <section className="card-deck row-2 my-5" key={people.id} />
      <div className="card-body">
        <div className="card">
          <img src={picture} alt="movie-banner" className="img-fluid" />
          <div className="content m-3 card-text">
            <div className="fs-3 mb-1">Name: {people.name}</div>
            <div className="fs-4 mb-1">Age: {people.age}</div>
            <div className="fs-6  mb-1">Hair Color: {people.hair_color}</div>
            <div className="fs-6">
              <span className="mb-2 card-text">Eye Color: </span>
              {people.eye_color}
            </div>
            <div className="my-4">
              <div className="badge bg-dark fs-6 text-info">
                Gender: {people.gender}
              </div>
              <Link to="/people" className="m-5 gap-2">
                  Back
                </Link>
            </div>
          </div>
        </div>
      </div>
      <section />
    </div>
  );
};

export default PeopleDetails;
