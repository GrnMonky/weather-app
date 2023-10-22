// pages/index.tsx
import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';
import CurrentWeatherDisplay from '../components/CurrentWeatherDisplay';NextNDays
import NextNDays from '../components/NextNDaysDisplay';

export default function Home() {
  const [location, setLocation] = useState<string>('');

  return (
    <div>
      <h1>Weather App</h1>
      <LocationInput setLocation={setLocation} />
      <CurrentWeatherDisplay location={location} />
      <NextNDays location={location} numberOfDays={7} />
    </div>
  );
}
