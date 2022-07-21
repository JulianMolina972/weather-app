import React from 'react'
import './styles.css'

export const Hour = ({weather, addHour, temp}) => {
  
  return (
    <li className='hour'>
      <p>{temp} °C</p>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Icon Weather"/>
      <p>{new Date().getHours() + addHour}:{new Date().getMinutes()}</p>      
    </li>
  )
}
