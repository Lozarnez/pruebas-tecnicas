const express = require('express');

const config = require('./config');
const { answer, getCompare } = require('./controllers');

const app = express();
const PORT = config.PORT;

// Routes
app.get('/respuesta', getCompare);

app.listen(PORT, err => {
  if (err) {
    console.error(`error starting server: ${err}`);
  } else {
    console.log(`app listening on port ${PORT}`);
  }
});