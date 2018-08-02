const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.status(200).send('ok');
})


module.exports = app;