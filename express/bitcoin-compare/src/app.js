const express = require('express');

const config = require('./config');
const { answer } = require('./controllers');

const app = express();
const PORT = config.port;

// Routes
app.get('/respuesta', answer);

app.listen(PORT, err => {
  if (err) {
    console.error(`error starting server: ${err}`);
  } else {
    console.log(`app listening on port ${PORT}`);
  }
});