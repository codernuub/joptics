const express = require('express');
const app = express();

app.use('/public', express.static('public'));

//page routes
const adminRoutes = require('./route/adminRoute');

//api routes
const brandRoutes = require('./routes/api/brands');
const collectionRoutes = require('./routes/api/collections');
const productRoutes = require('./routes/api/products');

//mounting app
app.use('/admin', adminRoutes);

app.use('/api/v1/brands', brandRoutes);
app.use('/api/v1/collections', collectionRoutes);
app.use('/api/v1/products', productRoutes);

module.exports = app;