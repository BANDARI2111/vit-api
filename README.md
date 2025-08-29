# VIT Full Stack API Assignment

This repository contains the solution for the VIT Full Stack Question Paper, which involves creating a REST API endpoint at `/bfhl`.

## API Endpoint

-   **URL:** `/bfhl`
-   **Method:** `POST`
-   **Request Body:**
    ```json
    {
      "data": ["a", "1", "334", "4", "R", "$"]
    }
    ```
-   **Success Response (200 OK):**
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

---

### **Local Development**

**1. Prerequisites:**
-   [Node.js](https://nodejs.org/) (v18 or newer)
-   npm (included with Node.js)

**2. Installation:**
Clone the repository and install the dependencies.
```bash
git clone <your-repo-url>
cd vit-bfhl-api
npm install