const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

corsOptions = {
  origin: "https://amazonaws.com",
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to server', err);
  } else {
    console.log('Listening on PORT', PORT);
  }
})