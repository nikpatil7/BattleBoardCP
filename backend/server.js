
// Core dependencies
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Environment variables
const port = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Database configuration
const connectToDatabase = require("./db");

// Initialize database connection
connectToDatabase();

// Middleware setup
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON request bodies

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

// Basic test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working properly!" });
});

// Start the server
app.listen(port, () => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://your-production-url.com"
      : `http://localhost:${port}`;

  console.log(`Server is running at ${baseUrl}`);
  console.log(`Health check available at: ${baseUrl}/api/health`);
});