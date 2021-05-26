const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use('/public', express.static('public'));
app.use(cookieParser());
app.use(express.json());
//page routes
const adminRoutes = require('./routes/adminRoute');

//api routes
const authRoutes = require('./routes/api/auth');
const brandRoutes = require('./routes/api/brands');
const categoriesRoutes = require('./routes/api/category');
const productRoutes = require('./routes/api/products');

//mounting app
app.use('/admin', adminRoutes);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/brands', brandRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/products', productRoutes);

module.exports = app;