const router = require('express').Router();

const authController = require('../../controller/auth');
const categoryController = require('../../controller/category');

router.route('/')
    .post(authController.preventUnauthApiAccess, categoryController.createCategory)
    .get(authController.preventUnauthApiAccess, categoryController.fetchCategories);

router.route('/:id').delete(authController.preventUnauthApiAccess, categoryController.deleteCategory);

module.exports = router;