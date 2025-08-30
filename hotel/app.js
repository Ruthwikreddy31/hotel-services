require('dotenv').config();
var path = require('path');
var express = require('express');
var app = express();

// Update views path
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// Use routes from app_server
var indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

module.exports = app;
