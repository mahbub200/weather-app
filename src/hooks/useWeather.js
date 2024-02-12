import { useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const fetchWeatherData = async (latitude, longitude) => {
    try {
        setLoading({
            ...loading,
            state: true,
            message: "Fetching weather data...",
    } 
     const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
     if(!response.ok){
        const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
     }
     


     catch (err) {
        setError(err);
    }finally {
        setLoading({
            ...loading,
            state: false,
            message: "",
        });
  };
};
