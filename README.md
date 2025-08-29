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

### ✅ Example Request
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
