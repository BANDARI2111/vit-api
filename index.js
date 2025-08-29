// index.js
// Target: Node.js v18+

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// The main POST route for processing the data array
app.post('/bfhl', (req, res) => {
    try {
        // 1. INPUT VALIDATION
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "The 'data' field is required and must be an array."
            });
        }

        // 2. USER DETAILS (!!! IMPORTANT: Replace with your actual details !!!)
        const user_details = {
            user_id: "john_doe_17091999", // format: full_name_ddmmyyyy
            email: "john.doe@example.com",
            roll_number: "ABCD123"
        };

        // 3. PROCESSING LOGIC
        const even_numbers = [];
        const odd_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let sum = 0;
        let alphabet_chars = "";

        const numericRegex = /^-?\d+$/;
        const alphabetRegex = /^[a-zA-Z]+$/;

        data.forEach(token => {
            if (numericRegex.test(token)) {
                const num = parseInt(token, 10);
                if (num % 2 === 0) {
                    even_numbers.push(String(num));
                } else {
                    odd_numbers.push(String(num));
                }
                sum += num;
            } else if (alphabetRegex.test(token)) {
                alphabets.push(token.toUpperCase());
                alphabet_chars += token;
            } else {
                special_characters.push(token);
            }
        });

        // 4. `concat_string` LOGIC
        const reversed_chars = alphabet_chars.split('').reverse().join('');
        const concat_string = reversed_chars.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');

        // 5. CONSTRUCT RESPONSE
        const response = {
            is_success: true,
            ...user_details,
            even_numbers,
            odd_numbers,
            alphabets,
            special_characters,
            sum: String(sum),
            concat_string
        };

        return res.status(200).json(response);

    } catch (error) {
        // Generic server error
        return res.status(500).json({
            is_success: false,
            message: `An unexpected error occurred: ${error.message}`
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export app for testing purposes
module.exports = app;