import getDailyForecastAPI from "./getDailyForecast";

const axios = require('axios');
const request = require('supertest');
const express = require('express');

// Import your API function and set up the Express app
const app = express();
app.use('/api', getDailyForecastAPI);

// Mock axios to simulate API responses
jest.mock('axios');
axios.get.mockResolvedValue({ data: { /* Mocked data here */ } });

describe('getDailyForecastAPI', () => {
  it('should respond with 200 and valid forecast data', (done) => {
    request(app)
      .get('/api/getDailyForecastAPI?location=London')
      .expect(200)
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty('location');
        expect(res.body).toHaveProperty('current');
        // Add more assertions as needed
        done();
      });
  });

  it('should respond with 500 if there is an error', (done) => {
    axios.get.mockRejectedValue(new Error('Mocked error'));
    request(app)
      .get('/api/getDailyForecastAPI?location=InvalidLocation')
      .expect(500)
      .end(done);
  });
});
