import express from 'express';
import quoteRoutes from './routes/quoteRoutes.js';

const app = express();

// Middlewares (Add if needed)
app.use(express.json());

// Routes
app.use('/api/quotes', quoteRoutes);

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;
