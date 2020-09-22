import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationRes = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`);
    const locationJson = await locationRes.json();
    const location = locationJson[0];

    const weatherRes = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${location.woeid}`);
    const weatherJson = await weatherRes.json();
    console.log(weatherJson);
  }

  return (
    <main>
      <h1>Weather App</h1>
      <form className="form" onSubmit={handleSubmit}>
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
