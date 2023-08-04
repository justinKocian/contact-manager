// Import required modules
const express = require('express');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

// Connect to the database
connectDB();

// Create the Express application
const app = express();

// Set the port from environment variable or use 5000 as default
const port = process.env.PORT || 5000;

// Middleware for parsing JSON data
app.use(express.json());

// Route for handling contacts related requests
app.use('/api/contacts', require('./routes/contactsRoute'));

// Middleware for handling errors
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});