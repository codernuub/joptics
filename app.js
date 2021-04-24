const express = require('express');
const app = express();

app.use('/public', express.static('client'));
app.use('/admin', express.static('admin'));

const adminRoutes = require('./route/adminRoute');

app.use('/admin', adminRoutes);

module.exports = app;