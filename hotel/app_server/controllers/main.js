const rooms = require('../models/rooms');
const nodemailer = require('nodemailer');

// ---------- Homepage ----------
exports.index = function (req, res) {
  res.render('index', { title: 'Welcome to Our Hotel' });
};

// ---------- Rooms Page ----------
exports.rooms = function (req, res) {
  res.render('rooms', {
    title: 'Our Rooms',
    rooms: rooms
  });
};

// ---------- Booking Form (GET) ----------
exports.bookingForm = function (req, res) {
  res.render('booking', {
    title: 'Book a Room',
    rooms: rooms
  });
};

// ---------- Booking Submission (POST) ----------
exports.bookingSubmit = async function (req, res) {
  try {
    const { name, email, roomType, checkin, checkout } = req.body;

    // Create email transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // from .env
        pass: process.env.EMAIL_PASS  // from .env
      }
    });

    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // send to the customer's email
      subject: "Your Room Booking Confirmation",
      text: `Hello ${name},

Thank you for booking with our hotel!
Here are your booking details:

Room: ${roomType}
Check-in: ${checkin}
Check-out: ${checkout}

We look forward to hosting you.

Best regards,
Hotel Management`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Render success page
    res.render('booking-success', {
      title: "Booking Confirmed",
      name,
      roomType,
      checkin,
      checkout,
      email
    });

  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).send("Something went wrong. Please try again.");
  }
};
