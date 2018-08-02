const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.status(200).send('ok');
// })

// app.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

module.exports = app;