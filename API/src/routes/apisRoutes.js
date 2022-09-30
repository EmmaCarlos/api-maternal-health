const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControl');

router.get('/', apiController.dataset);

module.exports = router;