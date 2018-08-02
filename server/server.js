const express = require('express');

const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));



module.exports = app;