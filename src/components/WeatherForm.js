import React from "react";

function WeatherForm({ city, loading, handleChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">City</label>
      <input
        type="text"
        name="city"
        className="input"
        value={city}
        onChange={handleChange}
      />
      <button className="button">
        {!loading ? "Get Weather" : "Fetching weather data..."}
      </button>
    </form>
  );
}

export default WeatherForm;
