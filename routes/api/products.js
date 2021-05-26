const router = require('express').Router();

const authController = require('../../controller/auth');
const productController = require('../../controller/products');

router.route('/')
    .post(authController.preventUnauthApiAccess, productController.createProduct)
    .get(authController.preventUnauthApiAccess, productController.fetchProducts);

router.route('/:id').delete(authController.preventUnauthApiAccess, productController.deleteProduct);

module.exports = router;