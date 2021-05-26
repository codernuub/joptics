const router = require('express').Router();

const authController = require('../../controller/auth');
const brandController = require('../../controller/brands');

router.route('/')
    .post(authController.preventUnauthApiAccess, brandController.createBrand)
    .get(authController.preventUnauthApiAccess, brandController.fetchBrands);

router.route('/:id').delete(authController.preventUnauthApiAccess, brandController.deleteBrand);

module.exports = router;