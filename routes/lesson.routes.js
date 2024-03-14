const express = require('express');
const lesson = require(' ../controller/lesson.controller');
const router = express.Router();

router.get('/lessons', lesson.getAllLesson);
router.get('/lessons/:id', lesson.getLesson);
router.post('/lessons', lesson.createLesson);

router.put('/lessons/:id', lesson.updateLesson);
router.delete('/lessons /:id', lesson.deleteLesson );

module.exports = router;