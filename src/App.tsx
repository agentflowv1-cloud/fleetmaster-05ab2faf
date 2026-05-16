import React from 'react';
import CarCard from './components/CarCard';
import './App.css';

const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2022, color: 'Blue' },
  { id: 2, brand: 'Honda', model: 'Civic', year: 2021, color: 'Red' },
  { id: 3, brand: 'Ford', model: 'Mustang', year: 2020, color: 'Black' }
];

const App = () => {
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

export default App;