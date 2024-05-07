import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import ApplicationRoot from './pages/MyApp';
import carData from './data/test_data.json' // Path to your JSON file

const CarProvider = createContext();

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carData);
  }, []);

  return (
    <CarProvider.Provider value={{ cars, setCars }}>
      <div className="App">
        <ApplicationRoot />
      </div>
    </CarProvider.Provider>
  );
}

export default App;
