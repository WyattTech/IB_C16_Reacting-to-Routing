import { NavLink } from "react-router-dom";
import "./styles/style.css";
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar  container-fluid d-inline-flex justify-content-evenly">
      <section>
        <h1>Studio Ghibli Wiki</h1>
      </section>
      <nav className="nav nav-pills justify-content-center p-2 shadow gap-5">
        <NavLink
          to="/films"
          style={(isActive) => ({
            color: isActive ? "white" : "blue",
          })}
        >
          Films
        </NavLink>
        <NavLink
          to="/"
          style={(isActive) => ({
            color: isActive ? "white" : "blue",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/people"
          style={(isActive) => ({
            color: isActive ? "white" : "blue",
          })}
        >
          People
        </NavLink>
        <NavLink
          to="/vehicle"
          style={(isActive) => ({
            color: isActive ? "white" : "blue",
          })}
        >
          Vehicle
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
