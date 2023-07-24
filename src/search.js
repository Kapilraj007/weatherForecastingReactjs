import {Link} from 'react-router-dom';
import {  useEffect, useState } from "react";
export default function Search() {
  const [shows, setShows] = useState([]);
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=836146208744976db40ff35fda4e3c53&units=metric`)
      .then(response => response.json())
      .then(data => {
        setShows(data);
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clouds":
        return "/images/clouds.png";
      case "Clear":
        return "/images/clear.png";
      case "Rain":
        return "/images/rain.png";
      case "Drizzle":
        return "/images/drizzle.png";
      case "Mist":
        return "/images/mist.png";
      default:
        return "/images/snow.png"; 
    }
  };

  return (
    <div className="card">
    <h1 className='heading'>Weather Forecasting </h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
      {shows && shows.weather && (
        <div className="weather">
          <img
            src={getWeatherIcon(shows.weather[0].main)}
            className="weather-icon"
            alt="weather icon"
          />
          <span className='des'>{shows.weather[0].description}</span>
          <h1 className="temp">{shows.main.temp}°C</h1>
          <Link to={`/weather/${shows.name}`} className="city">
            {shows.name}
          </Link>
          <span className="templevel">{shows.main.temp_max}-{shows.main.temp_min} °C</span>
        </div>
      )}
    </div>
  );
}
