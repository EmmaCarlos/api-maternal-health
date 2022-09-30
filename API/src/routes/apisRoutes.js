const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControl');

router.get('/', apiController.maternal_health);

module.exports = router;