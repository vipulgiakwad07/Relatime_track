const express = require('express');
const app = express();
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');

// Enable CORS
app.use(cors());

// Use routes
app.use('/', vehicleRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));