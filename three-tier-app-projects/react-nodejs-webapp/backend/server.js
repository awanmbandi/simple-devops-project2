require('dotenv').config();
const express = require('express');
const cors = require('cors');
const providerRoutes = require('./routes/providers');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/providers', providerRoutes);

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('Healthcare Service API is running.');
});

// Start the server
app.listen(port, () => {
  console.log(`Healthcare backend listening on port ${port}`);
});
