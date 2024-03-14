// role.routes.js
const express = require('express');
const { createRole } = require('../controller/role.controller');

const router = express.Router();

router.post('/', createRole);

module.exports = router;