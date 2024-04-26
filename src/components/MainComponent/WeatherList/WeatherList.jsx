import React, { useState, useEffect } from "react";
import WeatherCard from './WeatherCard'
import axios from 'axios';


const WeatherList = () => {

  const [city, setCity] = useState("");
  const [cards, setCards] = useState([]);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    });

    useEffect(() => {
        async function getDataWeather() {
            try {

                const apiKey = await import.meta.env.VITE_API_KEY;
                // Petición HTTP
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${long}&appid=${apiKey}`);
                let weather = res.data.list;
                // console.log(weather);
        
                // Guarda en el array de cards el resultado. Procesa los datos
                setCards(weather);
    
            } catch {
            setCards([]); // No pintes nada
            }
        }
    
        getDataWeather();
        
        }, [lat, long]);



    useEffect(() => {
        const getDataWeather = async () => {
            try {
                const apiKey = await import.meta.env.VITE_API_KEY;
                const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`);
                const weather = resp.data.list;
                setCards(weather);
                console.log(weather);
                
            } catch {
                setCards([]);
                console.log('No hay datos');
            }


        }

        getDataWeather();
            
        }, [city]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(e.target.city.value)
    }; 


    const paintData = () => cards.map((item, index) => (
                        <WeatherCard
                            key={index}
                            horario= {item.dt_txt}
                            temperatura= {item.main.temp}
                            estado= {item.weather[0].description}
                            logo={item.weather[0].icon}
                        />
                        ));

    

    return (

        <div>
            <h2>TU WEB DEL TIEMPO</h2>
            <h3>Busca tu ciudad</h3>
            <form onSubmit={handleSubmit}>
                <input name="city"/>
                <button type="submit">SEARCH</button>
            </form>

            {paintData()}

        </div>

        );
    };

export default WeatherList;
