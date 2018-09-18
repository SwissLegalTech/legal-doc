const async = require('async');
const natural = require('natural');
const paragraphsMetaConfig = require('../meta-config/reference-letter-structure.meta.json')
	.rules;
const _ = require('lodash');

/**
 * @method	analyzeLetterStructure
 * @description	method used to analyze letter structure
 *
 * @param {Object} parsedFile
 * @param {Function} callback
 */
function analyzeLetterStructure(parsedFile, callback) {
	let paragraphsWithMetaData = [],
		result;

	console.log('paragraphs - ' + JSON.stringify(parsedFile.paragraphs));
	for (let i = 0; i < parsedFile.paragraphs.length; i++) {
		const paragraph = parsedFile.paragraphs[i];
		// create new paragraph data
		paragraphsWithMetaData[i] = {
			text: paragraph,
			meta: [],
		};
	}


	async.each(
		paragraphsMetaConfig,
		(paragraphConfig, cb) => {
			async.eachOf(
				parsedFile.paragraphs,
				(paragraph, index, cbEachOf) => {
					let score = 0,
						match = [];

					async.waterfall(
						[
							asyncCb => {
								// look for meta words in paragraph
								if(paragraphConfig.metaWords) {
									for (let i = 0; i < paragraphConfig.metaWords.length; i++) {
										const metaWord = paragraphConfig.metaWords[i];
										let paragraphWords = paragraph.split(' ');
										for (let j = 0; j < paragraphWords.length; j++) {
											const word = paragraphWords[j];
								
											if (
												natural.LevenshteinDistance(
													metaWord.toLowerCase(),
													word.toLowerCase()
												) < 2
											) {
												console.log(`words - ${word},${metaWord} - score - ${natural.LevenshteinDistance(
													metaWord.toLowerCase(),
													word.toLowerCase()
												)}`)
												match.push(word);
												score++;
											}
										}
									}
								}
								asyncCb();
							},
							asyncCb => {
								// look for meta mixes in paragraph
								if(paragraphConfig.metaMix) {
									for (let i = 0; i < paragraphConfig.metaMix.length; i++) {
										const metaMix = paragraphConfig.metaMix[i];
										if (
											natural.LevenshteinDistance(
												metaMix.toLowerCase(),
												paragraph.toLowerCase(),
												{ search: true }
											).distance < 2
										) {
											match.push(metaMix);
											score += 1.5;
										}
									}
								}
								asyncCb();
							},
						],
						() => {
							
							// check score for paragraph
							if (score > 0) {
								// console.log(score)
								// console.log(match)
								paragraphsWithMetaData[index].meta.push({
									class: paragraphConfig.typeCodename,
									score: score,
									match: match,
								});

								// console.log(paragraphsWithMetaData);
							}

							cbEachOf();
						}
					);
				},
				error => {
					if (error) {
						cb(error);
					} else {
						result = _.cloneDeep(parsedFile);
						result.paragraphs = paragraphsWithMetaData;
						cb(null);
					}
				}
			);
		},
		error => {
			return callback(error, result);
		}
	);
}

module.exports = analyzeLetterStructure;
