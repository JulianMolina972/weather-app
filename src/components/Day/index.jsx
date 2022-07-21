import React from 'react'
import { getCurrentDay } from '../../utils/getCurrentDay'
import './styles.css'

export const Day = ( {weather, temp, dayNumber} ) => {
  
  return (
    <li className='day'>
      <span>{temp.min}</span>
      <img src="https://picsum.photos/80" alt="photo random"/>
      <h3  >{weather[0].main}</h3>
      <p>{getCurrentDay(new Date().getDay()) + dayNumber}</p>
      
    </li>
  )
}


