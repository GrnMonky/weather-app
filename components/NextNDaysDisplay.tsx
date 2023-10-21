// components/NextNDaysDisplay.tsx
import React from 'react';

interface NextNDaysDisplayProps {
  location: string;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

function NextNDaysDisplay({ location, setWeatherData }: NextNDaysDisplayProps) {
  // Fetch and set weather data for the next N days here

  return (
    <div>
      <h2>Next N Days Weather in {location}</h2>
      {/* Display weather data for the next N days */}
    </div>
  );
}

export default NextNDaysDisplay;
