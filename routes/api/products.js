const router = require('express').Router();
const productController = require('../../controller/products');

router.route('/')
    .post(productController.createProduct)
    .get(productController.fetchProducts);

router.route('/:id').delete(productController.deleteProduct);

module.exports = router;