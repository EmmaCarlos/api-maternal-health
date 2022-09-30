const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControl');

router.get('/apis', apiController.dataset);

module.exports = router;