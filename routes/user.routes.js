const express = require('express');
const user = require('../controllers/user.controller');
const router = express.Router();

router.get('/users', user.getUser);
router.get('/users/:id', user.updateUser);
router.post('/users', user.createUser);

router.put('/users/:id', user.updateUser);
router.delete('/users/:id', user.deleteUser);

module.exports = router;