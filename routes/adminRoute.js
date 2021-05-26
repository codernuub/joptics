const router = require('express').Router();
const authController = require('../controller/auth');
const path = require('path');

router.get('/login', (req, res) => {
    if (req.cookies.token) return res.redirect('/admin/upload');
    const file = path.resolve('public/admin/login.html');
    res.sendFile(file)
});

router.get('/categories', authController.preventUnauthPageAccess, (req, res) => {
    const file = path.resolve('public/admin/category.html');
    res.sendFile(file)
});

router.get('/brands', authController.preventUnauthPageAccess, (req, res) => {
    const file = path.resolve('public/admin/brand.html');
    res.sendFile(file)
});

router.get('/upload', authController.preventUnauthPageAccess, (req, res) => {
    const file = path.resolve('public/admin/upload.html');
    res.sendFile(file)
});

router.get('/product', authController.preventUnauthPageAccess, (req, res) => {
    const file = path.resolve('public/admin/product.html');
    res.sendFile(file);
});

module.exports = router;