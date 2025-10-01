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

// Log CORS configuration for debugging
console.log(` NODE_ENV: ${process.env.NODE_ENV}`);
console.log(` CORS_ORIGIN: ${CORS_ORIGIN}`);
console.log(` Environment CORS_ORIGIN: ${process.env.CORS_ORIGIN}`);


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

// CORS debugging middleware
app.use((req, res, next) => {
  console.log(` Request from origin: ${req.headers.origin}`);
  console.log(` Request method: ${req.method}`);
  console.log(` Request URL: ${req.url}`);
  next();
});

// Manual CORS middleware - more reliable than cors package
app.use((req, res, next) => {
  const allowedOrigins = [
    CORS_ORIGIN, // From environment auto-detection
    process.env.CORS_ORIGIN, // Direct from env
    process.env.FRONTEND_URL, // Alternative env var
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:3030'
  ].filter(Boolean); // Remove undefined values
  
  const origin = req.headers.origin;
  
  // Use environment-detected CORS origin for production
  if (process.env.NODE_ENV === 'production') {
    res.header('Access-Control-Allow-Origin', CORS_ORIGIN);
  } else if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    console.log('🔄 Handling OPTIONS preflight request');
    return res.sendStatus(200);
  }
  
  console.log(`✅ CORS headers set for origin: ${origin}, using CORS_ORIGIN: ${CORS_ORIGIN}`);
  next();
});

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

// CORS test endpoint
app.get("/api/cors-test", (req, res) => {
  res.json({ 
    message: "CORS is working!", 
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

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
