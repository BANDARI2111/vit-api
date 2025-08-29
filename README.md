A simple REST API that accepts an array of mixed values and returns categorized results: numbers (even/odd), alphabets, special characters, the sum of numbers, and a special concatenated string.

---

## Objective

Build a POST API at `/bfhl` that:

1. Returns request status (`is_success`).
2. Returns a user ID in the format `fullname_ddmmyyyy` (lowercase).
3. Returns email and roll number.
4. Returns:
   - even numbers (as strings)
   - odd numbers (as strings)
   - alphabets (as uppercase letters)
   - special characters
   - sum of all numbers (as a string)
   - concatenation of all alphabets in reverse order with alternating caps (starting with uppercase)

---

## API Reference

- URL: `/bfhl`
- Method: `POST`
- Content-Type: `application/json`

### Request Body
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Success Response (200)
```json
{
  "is_success": true,
  "user_id": "your_name_ddmmyyyy",
  "email": "your.email@example.com",
  "roll_number": "YOUR_ROLL_NUMBER",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

Notes:
- Numbers in the response are represented as strings.
- `alphabets` are uppercased versions of input letters.
- `concat_string` is formed by taking all alphabets in reverse input order and applying alternating caps starting with uppercase (e.g., ["a","R","b"] → reverse ["b","R","a"] → "BrA").

### Possible Error Responses
- 400 Bad Request (e.g., missing or invalid `data` field)
```json
{
  "is_success": false,
  "error": "Invalid request body. Expected { \"data\": [...] }"
}
```

---

## Local Development

### Prerequisites
- Node.js v18+  
- npm (comes with Node.js)

### Setup
```bash
git clone https://github.com/BANDARI2111/vit-api.git
cd vit-api
npm install
```

### Run
```bash
npm start
```

Server will start at:
- http://localhost:3000/bfhl

### Quick Test (cURL)
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

---

## Implementation Rules

- Parse the `data` array to classify entries:
  - Numbers: values that can be parsed as integers (keep as strings in output)
    - Even → `even_numbers`
    - Odd → `odd_numbers`
  - Alphabets: single letters A–Z or a–z → uppercase in `alphabets`
  - Special characters: everything else → `special_characters`
- `sum`: string-form sum of all numeric values (integers)
- `concat_string`: reverse input order of alphabets, apply alternating caps starting uppercase

---

## Metadata Fields

Update these fields in your implementation to reflect the actual user:
- `user_id`: `your_full_name_ddmmyyyy` (lowercase)
- `email`: your email address
- `roll_number`: your roll number

---
