const express = require('express');
const router = express.Router();
const vehicleData = require('../data/vehicleData.json');

// API endpoint to provide vehicle data
router.get('/api/vehicle-location', (req, res) => {
  res.json(vehicleData);
});

module.exports = router;
