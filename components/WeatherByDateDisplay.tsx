import React, { useEffect, useState } from 'react';

interface WeatherByDateProps {
  location: string;
  date: string; // Add a date prop
}

function WeatherByDate({ location, date }: WeatherByDateProps) {
  const [dailyData, setDailyData] = useState<CurrentWeather | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      if (!location || !date) {
        return;
      }

      try {
        const response = await fetch(`/api/getDailyForecast?location=${location}&date=${date}`);
        const json = await response.json();

        if (!json.error) {
          const weatherData = json as CurrentWeather;
          setDailyData(weatherData);
        }
      } catch (error) {
        console.error('Error fetching daily forecast:', error);
      }
    }

    fetchData();
  }, [location, date]); // Listen for changes in both location and date

  return (
    <div>
      <h2>Daily Weather Forecast for {location} on {date}</h2>
      {dailyData ? (
        <div>
          <p>Location: {dailyData.location.name}, {dailyData.location.region}, {dailyData.location.country}</p>
          <p>Local Time: {dailyData.location.localtime}</p>
          <p>Temperature: {dailyData.current.temp_c}°C</p>
          <p>Condition: {dailyData.current.condition.text}</p>
          <p>Humidity: {dailyData.current.humidity}%</p>
          {/* Add more properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherByDate;
