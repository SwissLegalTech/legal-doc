'use strict';
const express = require('express');
const fileParser = require('./providers/file-parser');
const analyzer = require('./providers/doc-analyzer');

let router = express.Router();

// router.post('/parse', fileParser);
router.get('/analyze', analyzer);

module.exports = router;
