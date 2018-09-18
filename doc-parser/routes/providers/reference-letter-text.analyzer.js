// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();
const score = require('./reference-letter-text.score');

const UTF16 = 2;

function analyzeSentiment(req, res) {
	var text = req.query.text;
	console.log(text);

	var document = {
		content: text,
		type: 'PLAIN_TEXT',
	};
	// Detects the sentiment of the text
	client
		.analyzeSentiment({ document: document })
		.then(results => {
			const sentiment = results;

			res.send(sentiment);
		})
		.catch(err => {
			console.error('ERROR:', err);
		});
}

function analyzeParagraph(text) {
	var document = {
		content: text,
		type: 'PLAIN_TEXT',
	};
	var promise = new Promise((resolve, reject) => {
		client
			.annotateText({
				document: document,
				features: {
					extractSyntax: false,
					extractEntities: true,
					extractDocumentSentiment: true,
				},
				encodingType: UTF16,
			})
			.then(results => {
				var annotations = results[0];
				score(annotations);
				resolve(annotations.sentences);
			})
			.catch(err => {
				console.error('ERROR:', err);
				reject();
			});
	});
	return promise;
}

/**
 * @method	analyzeDocument
 * @description	function which analyzes paragraph passed in body
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
function analyzeDocument(req, res) {
	let text = req.body.doc;
	
	analyzeParagraph(text)
		.then(result => {
			res.send(result);
		})
		.catch(err => {
			res.status(503);
		});
}

module.exports = {
	analyzeSentiment: analyzeSentiment,
	analyzeDocument: analyzeDocument,
	analyzeParagraph: analyzeParagraph,
};
