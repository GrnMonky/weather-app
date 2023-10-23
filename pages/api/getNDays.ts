import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch the daily weather forecast
async function getNDaysForecast(location: string, numberOfDays: number): Promise<any | undefined> {
  const BASE_URL = 'https://api.weatherapi.com/v1'; // Replace with your API endpoint
  const API_KEY = process.env.WEATHER_API_KEY; // Replace with your actual API key

  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${numberOfDays}`
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    return undefined;
  }
}

export default async function getNDaysForecastAPI(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const location = query.location as string;
  const numberOfDays = parseInt(query.days as string);

  const forecast = await getNDaysForecast(location, numberOfDays);
  if (forecast) {
    res.status(200).json(forecast);
  } else {
    res.status(500).json({ error: 'Error fetching weather forecast' });
  }
}
