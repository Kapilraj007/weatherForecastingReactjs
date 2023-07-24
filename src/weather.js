import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function WeatherDetails() {
  const [shows, setShows] = useState({});
  const { cityName } = useParams(); 

  useEffect(() => {
    fetchWeatherData(cityName);
  }, [cityName]);

  const fetchWeatherData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=836146208744976db40ff35fda4e3c53&units=metric`)
      .then(response => response.json())
      .then(data => {
        setShows(data);
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="card">
      {shows && shows.weather && (
        <div className="details">
          <div className="col">
            <img src="/images/humidity.png" alt="humidity" />
          </div>
          <div>
            <p className="humidity">{shows.main.humidity}%</p>
            <p>humidity</p>
          </div>
          <div className="col">
            <img src="/images/wind.png" alt="wind" />
          </div>
          <div>
            <p className="wind">{shows.wind.speed} km/h</p>
            <p>wind</p>
          </div>
       
     
       
        </div>
      )}
    </div>
  );
}
