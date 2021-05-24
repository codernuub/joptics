const router = require('express').Router();
const collectionController = require('../../controller/collections');

router.route('/')
    .post(collectionController.createCollection)
    .get(collectionController.fetchCollections);

router.route('/:id').delete(collectionController.deleteCollection);

module.exports = router;