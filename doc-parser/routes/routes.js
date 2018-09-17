'use strict';
const express = require('express');
const fileParser = require('./providers/file-parser');

let router = express.Router();

router.post('/parse', fileParser);

module.exports = router;
