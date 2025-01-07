const express = require('express');
const homeController = require('../../controllers/client/homeController');

const router = express.Router();

router.get('/', homeController.viewHomePage);

module.exports = router;
