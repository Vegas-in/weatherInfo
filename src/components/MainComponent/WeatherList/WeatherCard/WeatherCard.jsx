import React from "react";
import './WeatherCard.css'

const WeatherCard = ({horario, temperatura, estado, logo}) => {
  
  return (
    <article>
      <h4><b>Intervalos de 3 horas:</b></h4>
      <p><b>Date:</b> {horario}</p>
      <p><b>temperature:</b> {Math.round(temperatura)}ºC</p>
      <p><b>Clouds:</b> {estado}</p>
      <div className='weatherIcon'>
          <img src={`https://openweathermap.org/img/wn/${logo}@4x.png`} alt="Weather icon" />
      </div>
    </article>
  );
};

export default WeatherCard;
