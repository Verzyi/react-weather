const key = "e765cf643b254e76a7e71343241001";

const getWeather = async (city) => {
    try {
        const api_call = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
        if (!api_call.ok) {
            throw new Error("Failed to fetch data from API");
        }
        const data = await api_call.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from API: ', error);
        return null;
    }
}

export default getWeather;


