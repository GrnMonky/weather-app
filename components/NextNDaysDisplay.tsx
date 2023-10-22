import React, { useEffect, useState } from 'react';

interface NextNDaysProps {
  location: string;
  numberOfDays: number;
}

function NextNDays({ location, numberOfDays }: NextNDaysProps) {
  const [dailyData, setDailyData] = useState<WeatherForecast | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      if (!location || numberOfDays <= 0) {
        return;
      }
      const response = await fetch(`/api/getNDays?location=${location}&days=${numberOfDays}`);
      const jsonData = await response.json();

      try {
        if (!jsonData.error) {
          setDailyData(jsonData as WeatherForecast);
        }
      } catch {
        // Handle errors
      }
    }

    fetchData();
  }, [location, numberOfDays]);

  return (
    <div>
      <h2>Weather Forecast for the Next {numberOfDays} Days in {location}</h2>
      {dailyData ? (
        <div>
          <p>Location: {dailyData.location.name}, {dailyData.location.region}, {dailyData.location.country}</p>
          <p>Local Time: {dailyData.location.localtime}</p>
          {dailyData.forecast.forecastday ? (
            <ul>
              {dailyData.forecast.forecastday.map((forecast: any, index: number) => (
                <li key={index}>
                  <p>Date: {forecast.date}</p>
                  <p>Max Temperature: {forecast.day.maxtemp_c}°C</p>
                  <p>Min Temperature: {forecast.day.mintemp_c}°C</p>
                  <p>Condition: {forecast.day.condition.text}</p>
                  {/* Add more properties as needed */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No forecasts available.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NextNDays;
