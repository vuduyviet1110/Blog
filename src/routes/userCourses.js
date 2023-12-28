const express = require('express');
// import api của express là router
const router = express.Router();
const CoursesStoreController = require('../app/controllers/UserStoreController');

// đường dẫn gốc
router.get('/store/myCourse', CoursesStoreController.CouresesStore);
router.get('/Trash/myCourse', CoursesStoreController.CouresesTrash);
module.exports = router;
