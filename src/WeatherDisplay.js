import React from "react";




const WeatherDisplay = ({weatherData}) => {
return (
    <div>
    {weatherData?(
        <div>
        <p>City: {weatherData.location.name}, {weatherData.location.region}</p>
        <p>Temp: {weatherData.current.temp_f}</p>
        <p>Feels like: {weatherData.current.feelslike_f}</p>
        <p>Current Weather: {weatherData.current.condition.text} </p>
        <img src={weatherData.current.condition.icon} alt="Weather Icon"></img>
        </div>)
        :null}
        </div>
);
    };

export default WeatherDisplay;