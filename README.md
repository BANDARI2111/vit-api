# VIT Full Stack API Assignment

This repository contains an implementation of a REST API (`/bfhl`) that processes mixed input data and returns categorized results such as numbers, alphabets, special characters, and more.

---

## 📌 Objective
The goal is to develop an API (Method: **POST**) that accepts an array of mixed data types and returns:

1. Status of the request (`is_success`)
2. User ID (format: `fullname_ddmmyyyy`, all lowercase)
3. Email ID
4. Roll Number
5. Array of **even numbers** (as strings)
6. Array of **odd numbers** (as strings)
7. Array of **alphabets** (converted to uppercase)
8. Array of **special characters**
9. Sum of all numbers (returned as a string)
10. Concatenation of all alphabets in **reverse order with alternating caps**

---

## 🚀 API Endpoint

- **URL:** `/bfhl`
- **Method:** `POST`

### **Request Body**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

Success Response (200 OK)
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
⚙️ Local Development
1. Prerequisites

Node.js
 (v18 or newer)

npm (comes with Node.js)

2. Installation

Clone the repository and install dependencies:
git clone <your-repo-url>
cd vit-bfhl-api
npm install

3. Run the Server
npm start

The API will start on:
http://localhost:3000/bfhl
