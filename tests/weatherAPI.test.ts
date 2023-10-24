import { createMocks } from 'node-mocks-http'; // Import your function
import getForecastByDate from '../pages/api/getForecastByDate';
require('dotenv').config()

describe('getForecastByDate', () => {
  test('returns a valid response', async () => {
    const validLocation = 'Tokyo';
    const validDate = new Date().toISOString().split('T')[0]
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        location: validLocation,
        date: validDate,
      },
    });

    await getForecastByDate(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getData();
    expect(() => JSON.parse(responseData)).not.toThrowError();
  });
});

describe('getNDays', () => {
  test('returns a valid response', async () => {
    const validLocation = 'Tokyo';
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        location: validLocation,
        days: 6,
      },
    });

    await getForecastByDate(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getData();
    expect(() => JSON.parse(responseData)).not.toThrowError();
  });
});

describe('getDailyForecast', () => {
  test('returns a valid response', async () => {
    const validLocation = 'Tokyo';
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        location: validLocation
      },
    });

    await getForecastByDate(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getData();
    expect(() => JSON.parse(responseData)).not.toThrowError();
  });
});