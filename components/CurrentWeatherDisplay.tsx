// components/CurrentWeatherDisplay.tsx
import React from 'react';

interface CurrentWeatherDisplayProps {
  location: string;
  weatherData: WeatherData | null;
}

function CurrentWeatherDisplay({ location, weatherData }: CurrentWeatherDisplayProps) {
  return (
    <div>
      <h2>Current Weather in {location}</h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Weather: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
}

export default CurrentWeatherDisplay;
