const express = require('express');
const resource = require(' ../controller/resource.controller');
const router = express.Router();

router.get('/resources', resource.getAllResource);
router.get('/resources/:id', resource.getResource);
router.post('/resources', resource.createResource);

router.put('/resources/:id', resource.updateResource);
router.delete('/resources/:id', resource.deleteResource);

module.exports = router;