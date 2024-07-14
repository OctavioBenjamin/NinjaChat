const express = require('express');
const cors = require('cors');
const rateLimiter = require('./middlewares/rateLimiter');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api', routes);

module.exports = app;
export {};