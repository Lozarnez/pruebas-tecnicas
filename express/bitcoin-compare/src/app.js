const express = require('express');


const { answer } = require('./controllers');
const { getBitcoin } = require('./controllers/bitcoin');


const app = express();
const PORT = 3000;



// Routes
app.get('/respuesta', answer);

app.get('/compare', getBitcoin);

app.listen(PORT, err => {
  if (err) {
    console.error(`error starting server: ${err}`);
  } else {
    console.log(`app listening on port ${PORT}`);
  }
});