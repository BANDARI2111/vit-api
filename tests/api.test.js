// tests/api.test.js
const request = require('supertest');
const app = require('../index'); // Import the app from index.js

describe('POST /bfhl API Endpoint', () => {

    test('should correctly process Example A', async () => {
        const response = await request(app)
            .post('/bfhl')
            .send({ data: ["a", "1", "334", "4", "R", "$"] });
        
        expect(response.statusCode).toBe(200);
        expect(response.body.is_success).toBe(true);
        expect(response.body.even_numbers).toEqual(["334", "4"]);
        expect(response.body.odd_numbers).toEqual(["1"]);
        expect(response.body.alphabets).toEqual(["A", "R"]);
        expect(response.body.sum).toBe("339");
        expect(response.body.concat_string).toBe("Ra");
    });

    test('should correctly process Example C', async () => {
        const response = await request(app)
            .post('/bfhl')
            .send({ data: ["A", "ABcD", "DOE"] });

        expect(response.statusCode).toBe(200);
        expect(response.body.is_success).toBe(true);
        expect(response.body.alphabets).toEqual(["A", "ABCD", "DOE"]);
        expect(response.body.sum).toBe("0");
        expect(response.body.concat_string).toBe("EoDdCbAa");
    });

    test('should handle an empty data array', async () => {
        const response = await request(app)
            .post('/bfhl')
            .send({ data: [] });

        expect(response.statusCode).toBe(200);
        expect(response.body.is_success).toBe(true);
        expect(response.body.even_numbers).toEqual([]);
        expect(response.body.sum).toBe("0");
        expect(response.body.concat_string).toBe("");
    });

    test('should return a 400 error for missing data field', async () => {
        const response = await request(app)
            .post('/bfhl')
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.is_success).toBe(false);
        expect(response.body.message).toContain("The 'data' field is required");
    });
});