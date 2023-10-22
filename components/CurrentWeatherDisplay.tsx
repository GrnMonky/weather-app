import React, { useEffect, useState } from 'react';

interface DailyWeatherProps {
  location: string;
}

function DailyWeather({ location }: DailyWeatherProps) {
  const [dailyData, setDailyData] = useState<CurrentWeather | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      if (!location) {
        return
      }
      const response = await fetch(`/api/getDailyForecast?location=${location}`);
      const json = await response.json();

      try {

      const weatherData = json as CurrentWeather
      if (!json.error) {
        setDailyData(weatherData as CurrentWeather);
      }
      } catch {

      }
    }

    fetchData();
  }, [location]);

  return (
    <div>
      <h2>Daily Weather Forecast for {location}</h2>
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


export default DailyWeather;
