import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

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

// Function to fetch the daily weather forecast
async function getDailyForecast(location: string): Promise<any | undefined> {
  const BASE_URL = 'https://api.weatherapi.com/v1'; // Replace with your API endpoint
  const API_KEY = process.env.WEATHER_API_KEY; // Replace with your actual API key
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
    );
    return response.data
  } catch (error) {
    console.error('Error fetching daily forecast:', error);
    return undefined;
  }
}

export default async function getDailyForecastAPI(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const location = query.location as string;

  const forecast = await getDailyForecast(location);
  if (forecast) {
    res.status(200).json(forecast);
  } else {
    res.status(500).json({ error: 'Error fetching daily forecast' });
  }
}
