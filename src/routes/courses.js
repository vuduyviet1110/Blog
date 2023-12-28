const express = require('express');
// import api của express là router
const router = express.Router();

const courseController= require('../app/controllers/CourseController');
// đường dẫn gốc
router.get('/create', courseController.create)
router.post('/store', courseController.store);
router.get('/:id/edit',courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore/',courseController.restore);
router.delete('/:id/hardDelete', courseController.hardDelete);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);
module.exports = router;

