import React from "react";
import { useState, useEffect } from "react"; //Another hook
import { Link, useParams } from "react-router-dom";
import placeholder from "../images/placeholderImage.png";

const VehicleDetails = () => {
  const { vehicleid } = useParams();
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/vehicles/${vehicleid}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data))
      .catch((e) => console.log(e.message));
  }, [vehicleid]);

  return (
    <div className="col-md-6 container">
      <div className="card-deck">
        <section id="film" className="card-deck" />
        <div className="card-body">
          <div className="card">
            <img src={placeholder} alt="movie-banner" className="img-fluid" />
            <div className="content m-3 card-text">
              <div className="fs-3 mb-2">
                <strong> Name: </strong> {vehicle.name}
              </div>
              <div className="fs-4 mb-1">
                <strong> Vehicle Class: </strong> {vehicle.vehicle_class}
              </div>

              <div className="fs-6">
                <span className="fw-bold mb-2 card-text">
                  {" "}
                  Vehicle Description:{" "}
                </span>
                {vehicle.description}
              </div>
              <div className="my-4">
                <div className="badge bg-primary fs-6 text-white">
                  Vehicle Length: {vehicle.length}
                </div>

                <Link to="/vehicle" className="m-5 gap-2">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section />
      </div>
    </div>
  );
};

export default VehicleDetails;
