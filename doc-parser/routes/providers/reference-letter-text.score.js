const textMetaConfig = require('../meta-config/reference-letter-text.meta.json')

/**
 * @method	scoreSentence
 * @description	function which scores sentence based on meta config words
 * 
 * @param {String} sentence 
 */
function scoreSentence(sentence) {
	var score = 0;
	var text = sentence.text.content;
	
	textMetaConfig.good.forEach(function(value) {
		if (text.includes(value)) {
			score++;
		}
	});

	textMetaConfig.bad.forEach(function(value) {
		if (text.includes(value)) {
			score++;
		}
	});

	sentence = {
		score: score,
		content: sentence.text.content,
		sentiment: sentence.sentiment,
	};
	return sentence;
}

function score(annotations) {
	annotations.sentences.forEach(function(sentence, i, a) {
		a[i] = scoreSentence(sentence);
	});
}

module.exports = score;
