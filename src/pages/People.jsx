import React from "react";

import { useState, useEffect } from "react"; //Another hook
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([ ]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="col-md-6 container my-5">
      <ul className="list-group justify-content-center">
        {people.map((person) => (
          <li
            key={`get-people-${person.id}`}
            className="list-group-item list-group-item-danger  d-flex justify-content-between align-items-center " 
          > <strong> Character Name:</strong>
            {person.name}
            <Link to={`/people/${person.id}`} className="btn btn-outline-primary">
             View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;