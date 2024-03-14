const express = require('express');
const course = require('../controllers/course.controller');
const router = express.Router();

router.get('/courses', course.getCourseAll);
router.get('/courses/:id', course.getCourse);
router.post('/courses', course.createCourse);

router.put('/courses/:id', course.updateCourse);
router.delete('/courses /:id', course.deleteCourse);

module.exports = router;