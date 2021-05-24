const router = require('express').Router();
const brandController = require('../../controller/brands');

router.route('/')
    .post(brandController.createBrand)
    .get(brandController.fetchBrands);

router.route('/:id').delete(brandController.deleteBrand);

module.exports = router;