const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

const router = require('./routes/index');

app.use(cors());
app.use(router);

module.exports = app;