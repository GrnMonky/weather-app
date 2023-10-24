import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch the daily weather forecast
async function getDailyForecast(location: string): Promise<any | undefined> {
  const BASE_URL = 'https://api.weatherapi.com/v1';
  const API_KEY = process.env.WEATHER_API_KEY;
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
