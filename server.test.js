const app = require('./app')
const supertest = require('supertest')

const requestWithSupertest = supertest(app);

// jest.setTimeout(1000000);
// beforeEach(setupTestDb)

describe('get welcome', () => {
        test("should respond with a 200 status code", async () => {
          const response = await requestWithSupertest.get(`/`)
          expect(response.statusCode).toBe(200)
        })   
  })
