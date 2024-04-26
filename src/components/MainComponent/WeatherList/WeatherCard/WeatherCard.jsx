import React from "react";

const WeatherCard = ({horario, temperatura, estado, logo}) => {
  
  return (
    <article>
      <h4>Intervalos de 3 horas:</h4>
      <p>Date: {horario}</p>
      <p>temperature: {Math.round(temperatura)}ºC</p>
      <p>Clouds: {estado}</p>
      <div className='weatherIcon'>
          <img src={`https://openweathermap.org/img/wn/${logo}@4x.png`} alt="Weather icon" />
      </div>
    </article>
  );
};

export default WeatherCard;
