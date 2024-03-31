// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [buses] = useState([
    { id: 1, name: 'Bus A', seats: 30 },
    { id: 2, name: 'Bus B', seats: 30 },
    { id: 3, name: 'Bus C', seats: 30 },
  ]);

  const [selectedBus, setSelectedBus] = useState(null);
  const [seats, setSeats] = useState([]);

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setSeats(Array(bus.seats).fill(false));
  };

  const handleSeatClick = (index) => {
    const updatedSeats = [...seats];
    updatedSeats[index] = !updatedSeats[index];
    setSeats(updatedSeats);
  };

  const handleBooking = () => {
    // You can handle booking logic here, such as sending data to a backend
    alert(`You have booked seat(s) in ${selectedBus.name}`);
  };

  return (
    <div className="App">
      <h1>Bus Booking App</h1>
      <div className="buses">
        <h2>Buses Available:</h2>
        <div className="bus-buttons">
          {buses.map((bus) => (
            <button key={bus.id} onClick={() => handleBusSelect(bus)}>
              {bus.name} (Seats: {bus.seats})
            </button>
          ))}
        </div>
      </div>
      {selectedBus && (
        <div className="seats">
          <h2>Seats Available in {selectedBus.name}:</h2>
          <div className="seat-wrapper">
            {seats.map((isBooked, index) => (
              <div
                key={index}
                className={isBooked ? 'seat booked' : 'seat available'}
                onClick={() => handleSeatClick(index)}
              >
                Seat {index + 1}
              </div>
            ))}
          </div>
          <button onClick={handleBooking}>Book Seat(s)</button>
        </div>
      )}
    </div>
  );
}

export default App;
