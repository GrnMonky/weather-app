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

interface WeatherForecast {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        avghumidity: number;
        // Add more properties as needed
      };
    }>;
  };
}