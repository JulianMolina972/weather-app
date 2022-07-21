import React  from 'react'
import { useApi } from '../../context/ApiContext'
import './styles.css'

export const CurrentWeather = () => {
  const weather = useApi();
  

  if (!weather) {
    return <p>Loading...</p>
  }

  return (
    <section className='currentWeather container' >
      <div className="currentWeather--details">
      <h1>{weather.timezone}</h1>
        <h2>Temp</h2>
        <span>{weather.current.temp} °C</span>
        <ul className="current--stats">
          <li>
            <span>Wind: </span>
            <span>{weather.current.wind_speed} km/h</span>
          </li>
          <li>
            <span>Humidity: </span>
            <span>{weather.current.humidity}%</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
          {weather.current.weather.map((weather) => <h3 key={weather.id}>{weather.main}</h3>)}
        </div>
      </div>
      <div className="currentWeather--images">
        <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="Weather" />
      </div>
      
    </section>
  )
}
