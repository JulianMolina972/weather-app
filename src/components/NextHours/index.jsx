import React from "react";
import { useApi } from "../../context/ApiContext";
import { Hour } from "../Hour";


export const NextHours = () => {
  const weather = useApi();
  if(!weather) {
    return <p>Loading...</p>
  }
  
  return (
    <ul className=" container">
      {weather.hourly.slice(0, 8).map((hour, id) => <Hour {...hour} addHour={id}  />)}
    </ul>
  )

}