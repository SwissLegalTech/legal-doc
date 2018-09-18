// Imports the Google Cloud client library
const language = require('@google-cloud/language');
const async = require('async');
const letterStructureAnalyze = require('./reference-letter-strucutre.analyzer');

// Creates a client
const client = new language.LanguageServiceClient();

function parseFile(req, res) {
	let text = req.body.doc;

	// replace list symbols
	let parsedText = text.replace(/\n\n\*/gm, '<br> * ');
	parsedText = parsedText.replace(/\n\*/gm, '<br> * ');

	let fileParsed = parsedText.split(/\n/g);
	let fileStructure = {
		nameData: [],
		addressData: [],
		other: [],
	};

	async.eachOf(
		fileParsed,
		(paragraph, index, cb) => {
			var document = {
				content: paragraph,
				type: 'PLAIN_TEXT',
			};

			client
				.analyzeEntities({ document: document })
				.then(results => {
					const entities = results[0].entities;

					entities.forEach(entity => {
						if (entity.type === 'PERSON' && entity.salience > 0.9) {
							fileStructure.nameData.push(fileParsed[index]);
						} else if (entity.type === 'LOCATION' && entity.salience > 0.9) {
							fileStructure.addressData.push(fileParsed[index]);
						} else {
							fileStructure.other[index] = fileParsed[index];
						}
					});
					cb();
				})
				.catch(err => {
					console.error('ERROR:', err);
					cb();
				});
		},
		error => {
			fileStructure.paragraphs = fileStructure.other.filter(value => {
				return !!value;
			});

			delete fileStructure.other;

			letterStructureAnalyze(fileStructure, (error, analyzedDoc) => {
				return res.send(analyzedDoc);
			});
		}
	);
}

module.exports = parseFile;
