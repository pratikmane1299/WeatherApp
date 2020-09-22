import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city === '') { return }
    
    setLoading(true);
    const locationRes = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`);
    const locationJson = await locationRes.json();
    const location = locationJson[0];
    if (location) {
      const weatherRes = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${location.woeid}`);
      const weatherJson = await weatherRes.json();

      if (weatherJson) {
        setError(null);
        setWeatherInfo(weatherJson.consolidated_weather);
        setCity('');
      } else {
        setError({ message: 'Could not fetch weather data'});
        setCity('');
        setWeatherInfo([]);
      }      
    } else {
      setError({ message: 'Location Not Found'});
      setCity('');
      setWeatherInfo([]);
    }
    setLoading(false);
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
        <button className="button">{!loading ? 'Get Weather' : 'Fetching weather data...'}</button>
      </form>
      {error && <span className="error-message">{error.message}</span>}
      {
        !loading && (
          <div className="weather-wrapper">
          {
            weatherInfo.map(weather => (
              <div className="weather-card" key={weather.id}>
                <h4>{weather.applicable_date}</h4>
                <img 
                  src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} 
                  alt={weather.weather_state_name} 
                />
                <p><span>Humidity:</span> <span>{weather.humidity}°C</span></p>
                <p><span>Min:</span> <span>{weather.min_temp.toFixed(2)}°C</span></p>
                <p><span>Max:</span> <span>{weather.max_temp.toFixed(2)}°C</span></p>
              </div>
            ))
          }
          </div>
        )
      }
    </main>
  );
}

export default App;
