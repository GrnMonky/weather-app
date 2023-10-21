// pages/index.tsx
import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';
import CurrentWeatherDisplay from '../components/CurrentWeatherDisplay';
import NextNDaysDisplay from '../components/NextNDaysDisplay';

export default function Home() {
  const [location, setLocation] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <div>
      <LocationInput setLocation={setLocation} />
      <CurrentWeatherDisplay location={location} weatherData={weatherData} />
      <NextNDaysDisplay location={location} setWeatherData={setWeatherData} />
    </div>
  );
}
