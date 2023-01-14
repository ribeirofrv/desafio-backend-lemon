const cors = require('cors');
const express = require('express');

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/elegibilidade', routes.elegibilidade);

// app.use(errorMiddleware);

module.exports = app;
