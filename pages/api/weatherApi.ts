import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Replace with your actual API key
const BASE_URL = 'https://api.weatherapi.com/v1'; // Replace with the API endpoint

// Interface for the current weather response
interface CurrentWeather {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    // Add more properties as needed
  };
}

// Interface for the 7-day forecast response
interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    // Add more day-specific properties
  };
}

interface SevenDayForecast {
  location: {
    name: string;
    region: string;
    country: string;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

export
// Function to fetch the daily weather forecast
async function getDailyForecast(location: string): Promise<CurrentWeather | undefined> {
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`
    );
    return response.data as CurrentWeather;
  } catch (error) {
    console.error('Error fetching daily forecast:', error);
    return undefined;
  }
}

// Function to fetch the 7-day weather forecast
export
async function get7DayForecast(location: string): Promise<SevenDayForecast | undefined> {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7`
    );
    return response.data as SevenDayForecast;
  } catch (error) {
    console.error('Error fetching 7-day forecast:', error);
    return undefined;
  }
}