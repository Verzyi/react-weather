import React, { useEffect , useState } from "react";
import getWeather from "./api";


const WeatherComponent = () => {
    const [city, setCity] = useState(''); // Create a state variable for the city
    const [searchTimeout, setSearchTimeout] = useState(null); // Create a state variable for the timeout

    useEffect(() => {
        // Clear the timeout if it has already been set
        if (searchTimeout) {
            clearTimeout(searchTimeout);
          }
        if (city !== '') {
            const timeout = setTimeout(() => {
                fetchData();
            }
            , 1000);
            setSearchTimeout(timeout);
          }
      const fetchData = async () => {
        try {
          const weatherData = await getWeather(city);
          console.log(weatherData); // Log the retrieved data to the console
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      
    }, [city]);
  
const handelInputChange = (event) => {
    setCity(event.target.value);
  
};

    return (
        <div>
            <input type="text" placeholder="Enter city name" value={city} onChange={handelInputChange} />
        </div>
      );
    };
    
    export default WeatherComponent;
