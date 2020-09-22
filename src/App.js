import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <main>
      <h1>Weather App</h1>
      <form className="form">
        <label className="form-label">City</label>
        <input 
          type="text" 
          name="city" 
          className="input" 
          value={city} 
          onChange={handleChange} 
        />
        <button className="button">Get Weather</button>
      </form>
    </main>
  );
}

export default App;
