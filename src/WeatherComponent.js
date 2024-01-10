import React, { useEffect, useState } from "react";
import getWeather from "./api";
import WeatherDisplay from "./WeatherDisplay";
import WeatherSpinner from "./WeatherSpinner"

const WeatherComponent = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const data = await getWeather(city);
            console.log(data);
            setLoading(false);
            setWeatherData(data);
            // setCity('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLoading(false);
        }
    };
    

    useEffect(() => {
        // Clear the timeout if it has already been set
        if (searchTimeout) {
            clearTimeout(searchTimeout);
            
        }

        if (city === '') {
            setWeatherData(null);
            setLoading(false);
            return;
        }

        if (city !== '') {
            setLoading(true);
            const timeout = setTimeout(() => {
                fetchData();
                return () => clearTimeout(timeout);
            }, 1000);
            setSearchTimeout(timeout);
        }
    }, [city]);

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
            {loading?<WeatherSpinner/>:<WeatherDisplay weatherData={weatherData} />}
        </div>
    );
};

export default WeatherComponent;
