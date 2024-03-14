const express = require('express');
const progress = require(' ../controller/progress.controller');
const router = express.Router();

router.get('/progresses', progress.getAllProgress);
router.get('/progresses/:id', progress.getProgress);
router.post('/progresses', progress.createProgress);

router.put('/progresses/:id', progress.updateProgress);
router.delete('/progresses/:id', progress.deleteProgress);

module.exports = router;