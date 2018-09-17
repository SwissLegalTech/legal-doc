// Imports the Google Cloud client library
const language = require('@google-cloud/language');
const async = require('async');
const natural = require('natural');
const _ = require('lodash');

// Creates a client
const client = new language.LanguageServiceClient();

const paragraphsMetaConfig = [
	{
		metaWords: ['Arbeitszeugnis', 'Zwischenzeugnis', 'Zuegnis'],

		typeCodename: 'title',
	},
	{
		metaWords: ['geboren'],
		metaMix: ['geboren am', 'von bis', 'vom bis'],
		typeCodename: 'introduction',
	},
	{
		metaWords: [
			'Tätigkeitsgebiet',
			'Tätigkeit',
			'Tätigkeiten',
			'Aufgabengebiet',
			'Aufgabenbereich',
			'umfasst',
		],
		typeCodename: 'work-tasks',
	},
	{
		metaWords: [
			'Auffassungsgabe',
			'schnell',
			'eingearbeitet',
			'Fähigkeit',
			'fundiert',
			'Fachwissen',
			'Leistungsbereitschaft',
		],
		typeCodename: 'competence',
	},
	{
		metaWords: [
			'Team',
			'Umgang',
			'zielgerichtet',
			'rbeitsweise',
			'effizient',
			'sorgfältig',
			'zuverlässig',
			'umgang',
			'Verhalten',
		],
		metaMix: ['mit Vorgesetzten und Kollegen', 'robleme mit Autorität'],
		typeCodename: 'behaviour',
	},
	{
		metaWords: ['endet', 'entschlossen', 'Arbeitsverhältnis', 'beendet'],
		typeCodename: 'termination',
	},
	{
		metaWords: ['bedauern', 'bedanken', 'wünschen', 'weiterhin'],
		metaMix: ['alles Gute', 'viel Erfolg'],
		typeCodename: 'conclusion',
	},
];
// Creates a client
function analyzeLetterStructure(parsedFile, res) {
	let paragraphsMetaData = {
		title: [],
		introduction: [],
		'work-tasks': [],
		competence: [],
		behaviour: [],
		termination: [],
		conclusion: [],
	};
	async.each(
		paragraphsMetaConfig,
		(paragraphConfig, cb) => {
			async.eachOf(
				parsedFile.paragraphs,
				(paragraph, index, cbEachOf) => {
					// Detects syntax in the document
					client
						.analyzeSyntax({
							document: {
								content: paragraph,
								type: 'PLAIN_TEXT',
							},
						})
						.then(results => {
							const syntax = results[0];
							let score = 0,
								match = [];

							_.forEach(paragraphConfig.metaWords, metaWord => {
								syntax.tokens.forEach(part => {
									if (
										natural.LevenshteinDistance(
											metaWord.toLowerCase(),
											part.text.content.toLowerCase()
										) < 2
									) {
										match.push(part.text.content);
										score++;
									}
								});
							});

							_.forEach(paragraphConfig.metaMix, metaMix => {
								if (
									natural.LevenshteinDistance(
										metaMix.toLowerCase(),
										paragraph.toLowerCase(),
										{ search: true }
									).distance < 2
								) {
									match.push(metaMix);
									score++;
								}
							});

							if (score > 0) {
								paragraphsMetaData[paragraphConfig.typeCodename].push({
									score: score,
									index: index,
									paragraph: paragraph,
									match: match,
								});
							}
							cbEachOf();
						})
						.catch(err => {
							console.error('ERROR:', err);
							cbEachOf(err);
						});
				},
				error => {
					if (error) {
						cb(error);
					} else {
						parsedFile.metaData = paragraphsMetaData;
						cb();
					}
				}
			);
		},
		error => {
			console.log('DONE');
			return res.send(parsedFile);
		}
	);
}

module.exports = analyzeLetterStructure;
