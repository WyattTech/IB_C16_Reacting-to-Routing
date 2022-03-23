import React from "react";

import { useState, useEffect } from "react"; //Another hook
import { Link } from "react-router-dom";

const Vehicle= () => {
  const [vehicle, setVehicle] = useState([ ]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicle(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="col-md-6 container my-5">
      <ul className="list-group justify-content-center">
        {vehicle.map((vehicle) => (
          <li
            key={`get-whip-${vehicle.id}`}
            className="list-group-item list-group-item-danger  d-flex justify-content-between align-items-center " 
          > <strong> Vehicle Name:</strong>
            {vehicle.name}
            <Link to={`/vehicle/${vehicle.id}`} className="btn btn-outline-primary">
             View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicle;