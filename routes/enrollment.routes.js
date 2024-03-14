const express = require('express');
const enrollment = require(' ../controller/enrollment.controller');
const router = express.Router();

router.get('/enrollments', enrollment.getAllEnrollment);
router.get('/enrollments/:id', enrollment.getEnrollment);
router.post('/enrollments', enrollment.createEnrollment);

router.put('/enrollments/:id', enrollment.updateEnrollment);
router.delete('/enrollments /:id', enrollment.deleteEnrollment );

module.exports = router;