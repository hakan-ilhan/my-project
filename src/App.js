import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [radius, setRadius] = useState("");
  const [places, setPlaces] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nearby Places Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Enter longitude"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter latitude"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="radius" className="form-label">
            Radius (meters)
          </label>
          <input
            type="text"
            className="form-control"
            id="radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            placeholder="Enter radius in meters"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="mt-4">
        {places.length > 0 && (
          <ul className="list-group">
            {places.map((place, index) => (
              <li key={index} className="list-group-item">
                {place.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
