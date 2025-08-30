var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// GET routes
router.get('/', ctrlMain.home);
router.get('/rooms', ctrlMain.rooms);
router.get('/booking', ctrlMain.booking);
router.get('/services', ctrlMain.services);
router.get('/contact', ctrlMain.contact);

// POST route for booking confirmation
router.post('/booking', ctrlMain.bookingSuccess);
router.post('/booking', ctrlMain.bookingSubmit);


module.exports = router;
