import React from 'react';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
}

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="w-64 m-4 bg-white rounded shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">{car.brand} {car.model}</h2>
      <p className="text-gray-600">Year: {car.year}</p>
      <p className="text-gray-600">Color: {car.color}</p>
    </div>
  );
};

export default CarCard;