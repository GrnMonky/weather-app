import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch the daily weather forecast for a specific date, including future dates
async function getForecastByDate(location: string, date: string): Promise<any | undefined> {
  const BASE_URL = 'https://api.weatherapi.com/v1'; // Replace with your API endpoint
  const API_KEY = process.env.WEATHER_API_KEY; // Replace with your actual API key
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&dt=${date}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching daily forecast:', error);
    return undefined;
  }
}

export default async function getForecastByDateAPI(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const location = query.location as string;
  const date = query.date as string; // Assuming you have a "date" parameter in your query

  const forecast = await getForecastByDate(location, date);
  if (forecast) {
    res.status(200).json(forecast);
  } else {
    res.status(500).json({ error: 'Error fetching daily forecast' });
  }
}
