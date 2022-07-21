import React, {useEffect, useState} from 'react'
import './styles.css'

export const LocalHour = () => {
  const [hour, setHour] = useState(null)
  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/America/Bogota')
      .then(response => response.json())
      .then(data => {
        const localDate = new Date(data.datetime.split('.')[0])
        setHour(localDate)
      })
  }, [])

  if(!hour) {
    return <p>Loading...</p>
  }
  return (
    <div className='container'>
      <p className='localHour' >{hour.getHours()}:{hour.getMinutes()}</p>
    </div>
  )
}
