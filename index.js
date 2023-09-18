const express = require('express')
const app = express()
// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080

app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})