// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

function analyze(req, res) {
	// The text to analyze
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
			const sentiment = results[0].documentSentiment;

			console.log(`Text: ${text}`);
			console.log(`Sentiment score: ${sentiment.score}`);
			console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
			res.send(sentiment);
		})
		.catch(err => {
			console.error('ERROR:', err);
		});
}
module.exports = analyze;
