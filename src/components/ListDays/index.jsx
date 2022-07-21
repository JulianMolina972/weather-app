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
    <ul className='container'>
      {weather.daily.map((day, id) => <Day  {...day} dayNumber={id} />)}
    </ul>
  )
}
