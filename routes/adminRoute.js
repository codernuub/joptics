const router = require('express').Router();

const path = require('path');

router.get('/login', (req, res) => {
    const file = path.resolve(__dirname, '../admin/login.html');
    res.sendFile(file)
});
router.get('/upload', (req, res) => {
    const file = path.resolve(__dirname, '../admin/upload.html');
    res.sendFile(file)
});
router.get('/product', (req, res) => {
    const file = path.resolve(__dirname, '../admin/product.html');
    res.sendFile(file);
});

module.exports = router;