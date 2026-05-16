import React from "react";
import { Routes, Route } from "react-router-dom";

import CarCard from "./components/CarCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

const cars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2022, color: "Blue" },
  { id: 2, brand: "Honda", model: "Civic", year: 2021, color: "Red" },
  { id: 3, brand: "Ford", model: "Mustang", year: 2020, color: "Black" },
];

const Cars = () => {
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Car Models</h1>

      <div className="flex flex-wrap justify-center">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="h-full">
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;