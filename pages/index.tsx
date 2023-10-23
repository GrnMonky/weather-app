// pages/index.tsx
import React, { useEffect, useState } from 'react';
import LocationInput from '../components/LocationInput';
import CurrentWeatherDisplay from '../components/CurrentWeatherDisplay';
import NextNDays from '../components/NextNDaysDisplay';
import WeatherByDate from '@/components/WeatherByDateDisplay';

export default function Home() {
  const [location, setLocation] = useState<string>('Tokyo');
  const [date, setDate] = useState('');

  const setDateToCurrent = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    setDate(currentDate);
  };

  const clearDate = () => {
    setDate('');
  };

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-center">
      {date ? (
      <h1 className="text-4xl font-bold mb-8 text-white">{new Date(date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" })}</h1>
      ) : (
        <h1 className="text-4xl font-bold mb-8 text-white">Weather App</h1>
      )}
      <LocationInput setLocation={setLocation}/>
      {date ? (
        <div onClick={clearDate} className="mt-8">
          <WeatherByDate location={location} date={date} />
        </div>
      ) : (
        <>
          <div className="mt-8" onClick={setDateToCurrent}>
            <CurrentWeatherDisplay location={location} />
          </div>
          <div className="mt-8">
            <NextNDays location={location} numberOfDays={7} setDate={setDate} />
          </div>
        </>
      )}
    </div>
  );
}

