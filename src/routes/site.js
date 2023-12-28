const express = require('express');
// import api của express là router
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

// định nghĩa tuyến đường trong siteController
router.get('/search', SiteController.search);
router.get('/', SiteController.home);

module.exports = router;
