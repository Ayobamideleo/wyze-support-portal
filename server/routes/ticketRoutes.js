// routes/ticketRoutes.js
const express = require("express");
const router = express.Router();

// Simple test route
router.get("/", (req, res) => {
  res.send("Ticket route working ✅");
});

module.exports = router;
