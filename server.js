require('dotenv').config(); // Loads .env
const express = require('express');
const morgan = require('morgan');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');


const app = express();

// Middleware: logs HTTP requests in 'combined' format for production
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Square Catalog Service is running!');
});

// Global error handler
app.use((err, req, res, next) => {
  // Log error with stack trace for debugging
  console.error(`[ERROR] ${err.stack || err}`);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[INFO] Server started on port ${PORT}`);
});
