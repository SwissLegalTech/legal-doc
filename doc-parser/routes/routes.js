'use strict';
const express = require('express');
const fileParser = require('./providers/fileParser');

let router = express.Router();

router.post('/parse', fileParser);

module.exports = router;
