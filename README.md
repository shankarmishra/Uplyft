# Ecommerce Chatbot

A full-stack ecommerce chatbot application built with **React** (frontend) and **Flask** (backend).  
This project allows users to sign up, log in, chat with a bot, and view/search products.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- User authentication (signup & login)
- JWT-based secure API
- Chat interface with bot responses
- Product search and display
- Past conversations history
- Modular code structure

---

## Project Structure

```
ecommerce-chatbot/
│
├── backend/                  # Flask backend
│   ├── app/                  # Application code
│   ├── instance/             # Instance folder for configuration
│   ├── tests/                # Unit tests
│   ├── requirements.txt       # Python dependencies
│   └── run.py                # Entry point for the Flask app
│
├── frontend/                 # React frontend
│   ├── public/               # Public files
│   ├── src/                  # React source code
│   ├── package.json           # Node.js dependencies
│   └── .env                  # Environment variables for React
│
└── README.md                 # Project documentation
```

---

## Setup Instructions

### Backend Setup

1. **Go to backend folder:**
   ```sh
   cd backend
   ```
2. **Install Python dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
3. **Set up environment variables:**
   - Copy `instance/config.py.example` to `instance/config.py` and update the values.
4. **Run the Flask app:**
   ```sh
   python run.py
   ```

### Frontend Setup

1. **Go to frontend folder:**
   ```sh
   cd frontend
   ```
2. **Install Node.js dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the `frontend` folder and add the necessary variables.
4. **Run the React app:**
   ```sh
   npm start
   ```

---

## Environment Variables

| Variable                | Description                          |
|-------------------------|--------------------------------------|
| `FLASK_ENV`            | Environment for Flask (`development` or `production`) |
| `SECRET_KEY`           | Secret key for JWT and session      |
| `DATABASE_URL`         | URL for the database                 |
| `OPENAI_API_KEY`       | API key for OpenAI                   |
| `FRONTEND_URL`         | URL of the frontend (for CORS)      |

---

## Usage

1. Start the backend and frontend servers as described in the setup instructions.
2. Open your browser and go to `http://localhost:3000` (or the URL specified in `FRONTEND_URL`).
3. Sign up for a new account or log in with an existing account.
4. Use the chat interface to interact with the bot.
5. Search for products using the search bar.
6. View past conversations in the history section.

---

## Troubleshooting

- If you encounter any issues, check the browser console and server logs for error messages.
- Common issues include port conflicts, missing environment variables, and dependency version mismatches.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
#   U p l y f t 
 
 
