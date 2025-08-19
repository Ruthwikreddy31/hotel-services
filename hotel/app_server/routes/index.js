// app_server/routes/index.js
var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// Define routes
router.get('/', ctrlMain.home);
router.get('/rooms', ctrlMain.rooms);
router.get('/booking', ctrlMain.booking);
router.get('/services', ctrlMain.services);
router.get('/contact', ctrlMain.contact);

module.exports = router;
