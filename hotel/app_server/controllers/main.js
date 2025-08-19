// app_server/controllers/main.js

// Render Home Page
exports.home = function(req, res) {
  res.render('home', { title: 'Hotel Paradise - Home' });
};

// Render Rooms Page
exports.rooms = function(req, res) {
  res.render('rooms', { title: 'Our Rooms' });
};

// Render Booking Page
exports.booking = function(req, res) {
  res.render('booking', { title: 'Book a Room' });
};

// Render Services Page
exports.services = function(req, res) {
  res.render('services', { title: 'Our Services' });
};

// Render Contact Page
exports.contact = function(req, res) {
  res.render('contact', { title: 'Contact Us' });
};
