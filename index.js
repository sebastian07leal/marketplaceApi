/* eslint-disable no-undef */
const express = require('express');
const routers = require('./src/routes');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/api', routers);

app.use((_req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores globales
app.use((err, _req, res) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})