import React, { useEffect, useState }  from 'react'
import { ListDays } from '../ListDays'
import './styles.css'

export const CurrentWeather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}onecall?lat=51.5073&lon=-0.1277&metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data)
        setLoading(false)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section className='currentWeather' > 
      <div className="currentWeather--details">
      <h1>{weather.timezone}</h1>
        <h2>Temp</h2>
        <span>{weather.current.temp}°</span>
        <ul className="current--stats">
          <li>
            <span>Wind </span>
            <span>{weather.current.wind_speed} km/h</span>
          </li>
          <li>
            <span>Humidity </span>
            <span>{weather.current.humidity}%</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
          {weather.current.weather.map(weather => <h3 key={weather.id}>{weather.main}</h3>)}
        </div>
      </div>
      <div className="currentWeather--images">
        <img src="" alt="weather" />
      </div>
      <ListDays days={weather.daily}/>
    </section>
  )
}
