/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const routers = require('./src/routes');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use('/api', routers);

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Manejo de errores globales
app.use((err, _req, res) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})