/**
 * Main server configuration file for the Code Contest Tracker application
 * This file sets up the Express server, middleware, routes, and database connection
 * 
 * @requires express - Web application framework
 * @requires cors - Cross-Origin Resource Sharing middleware
 * @requires dotenv - Environment variable management
 * @requires express-rate-limit - Request rate limiting middleware
 */

// Core dependencies
const express = require("express");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

// Environment variables
const port = process.env.PORT;

// Auto-detect CORS origin based on environment
const getCorsOrigin = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.CORS_ORIGIN || 'https://battleboardcp.vercel.app'; //frontend on Vercel
  }
  return 'http://localhost:5173'; // Development default
};

const CORS_ORIGIN = getCorsOrigin();


// Database configuration
const connectToDatabase = require("./db");

// Route imports
const userRoutes = require("./routes/userRoutes");
const contestRoutes = require("./routes/contestRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

// Services
const {processReminders} = require("./services/reminderService");

app.set("trust proxy", 1); // Trust first proxy for rate limiting

/**
 * Rate limiter configuration
 * Prevents abuse by limiting the number of requests from a single IP
 */
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute window
  max: 500, // Maximum 500 requests per window
  message: "Too many requests, please try again later.",
});

// Initialize database connection
connectToDatabase();

// Middleware setup
app.use(
  cors({
    origin: [
      CORS_ORIGIN,
      'http://localhost:5173', // Local development
      'http://localhost:3000',
      'http://localhost:3030', // Alternative dev port
      'https://battleboardcp.vercel.app' // Your frontend on Vercel
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Enable credentials if using cookies or auth tokens
  })
);

// app.use(cors()); // allow everybody to use backend

app.use(express.json()); // Parse JSON request bodies
app.use(limiter); // Apply rate limiting to all routes

// Initialize reminder processing
processReminders();

/**
 * Route configurations
 * All routes are prefixed with /api
 */
app.use("/api/users", userRoutes);
app.use("/api/contests", contestRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/reminders", reminderRoutes);

/**
 * Start the server
 * Listen on the specified port from environment variables
 */
app.listen(port || 3030, () => {
  console.log(` Server running on port ${port || 3030}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(` CORS Origin: ${CORS_ORIGIN}`);
  console.log(` Backend URL: ${process.env.NODE_ENV === 'production' ? 'https://battleboardcp.onrender.com' : `http://localhost:${port || 3030}`}`);
  console.log(` Frontend URL: ${process.env.NODE_ENV === 'production' ? 'https://battleboardcp.vercel.app' : 'http://localhost:5173'}`);
});

// Export for Vercel serverless functions
module.exports = app;
