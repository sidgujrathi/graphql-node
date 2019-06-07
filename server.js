/**
 * This fie is express server file where we cconfigure express server and
 * apollo server as middleware for the same
 */

require('dotenv').config();

// HTTP SERVER
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const Server = require('./src/app');

const app = express();
const { API_ENDPOINT } = process.env;

app.use(cors({
  origin: '*', // Be sure to switch to your production domain
  optionsSuccessStatus: 200,
}));

app.use(compression());

// Endpoint to check if the API is running
app.get('/', (req, res) => {
  res.send(new Date());
});

// Append apollo to our API
Server.applyMiddleware({ app, path: API_ENDPOINT });

module.exports = app;
