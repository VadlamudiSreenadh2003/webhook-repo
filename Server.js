// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('🔔 Webhook received:', req.body);
  res.status(200).json({ message: 'Webhook received successfully' });
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
