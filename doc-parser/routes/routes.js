'use strict';
const express = require('express');
const fileParser = require('./providers/reference-letter.parser');
const analyzer = require('./providers/reference-letter-text.analyzer');

let router = express.Router();

router.post('/parse', fileParser);
router.get('/analyze', analyzer.analyzeDocument);
router.get('/sentiment', analyzer.analyzeSentiment);

module.exports = router;
