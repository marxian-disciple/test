const request = require('supertest');
const app = require('../server'); // This imports your Express app

describe('GET /', () => {
  it('should return a hello message', async () => {
    const response = await request(app).get('/'); // Send GET request to the root URL
    expect(response.text).toContain('Hello from Express!'); // Assert the response
  });
});
