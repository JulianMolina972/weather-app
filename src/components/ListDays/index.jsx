import React from 'react'
import { Day } from '../Day'
import { useApi } from '../../context/ApiContext'
import './styles.css'
export const ListDays = () => {
  const weather = useApi();
  if(!weather) {
    return <p>Loading...</p>
  }
  

  return (
    <ul className='daily'>
      {weather.daily.map(day => <Day key={day.dt} {...day} dayNumber={day.dt}/>)}
    </ul>
  )
}
