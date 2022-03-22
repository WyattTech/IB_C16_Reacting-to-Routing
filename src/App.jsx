import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Film />} />
        <Route path="/films/:detailsId" element={<FilmsDetails  />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:detailsId" element={<PeopleDetails />}  />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/vehicle/:detailsId" element={<VehicleDetails />} />
        <Route path="*" element={<h2> 404 Page Not Found </h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
