import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';

//Pages and Components Section
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Film from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";
import Vehicle from "./pages/Vehicle";
import VehicleDetails from "./pages/VehicleDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Film />} />
        <Route path="/films/:filmsid" element={<FilmsDetails  />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:personid" element={<PeopleDetails />}  />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/vehicle/:vehicleid" element={<VehicleDetails />} />
        <Route path="*" element={<h2> 404 Page Not Found </h2>} />
      </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
