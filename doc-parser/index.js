'use strict';
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

let customHeaders = (req, res, next) => {
	// CORS
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	// vary accept-encoding
	res.header('Vary', 'Accept-Encoding');

	// cache control, max age in seconds
	res.header('Cache-Control', 'max-age=' + 24 * 60 * 60);

	next();
};

var app = express();

app.use(compression());

app.use(customHeaders);

app.use(bodyParser.json());


// register all routes for versions
app.use('/v10', require(`./routes/routes.js`));
	
console.log(`Server listening on port ${process.env.PORT || 8081} ...`);
app.listen(process.env.PORT || 8081);