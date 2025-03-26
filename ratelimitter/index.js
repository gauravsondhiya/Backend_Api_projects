const express = require('express');
const app = express();

// Object to track number of requests per user
let numberOfRequestsForUser = {};

// Clear the object every second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

// Global middleware for rate limiting
app.use((req, res, next) => {
  // Get user-id from headers
  const userId = req.headers['user-id'];

  // If no user-id is provided, you can decide what to do (e.g., reject or allow)
  if (!userId) {
    return res.status(400).json({ message: 'User-ID header is required' });
  }

  // Initialize user's request count if not already present
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 0;
  }

  // Increment the request count for this user
  numberOfRequestsForUser[userId]++;

  // Check if the user has exceeded 5 requests
  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).json({ message: 'Rate limit exceeded. Max 5 requests per second allowed.' });
  }

  // If under limit, proceed to the next middleware or route
  next();
});

// Example route for testing
app.get('/test', (req, res) => {
  res.json({ message: 'Request successful!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});