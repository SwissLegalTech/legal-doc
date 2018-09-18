let verhalten = [
	'Umgang',
	'Vorgesetzte',
	'Arbeitskollegen',
	'Kunden',
	'Geschäftspartner',
	'Zusammenarbeit',
	'Auftreten',
	'Verhalten',
];

let good = [
	'sehr',
	'äusserst',
	'immer',
	'stets',
	'jederzeit',
	'absolut',
	'gleichermassen',
	'gleichermassen sehr',
	'ausserordentlich',
	'hoch',
	'weiterhin',
];
let good_pre = ['hohe', 'gross'];
let bad = ['in der regel', 'meist', 'im Allgemeinen', 'oft'];

function createTokenIndex(annotations) {
	var tokenIndex = [];
	annotations.tokens.forEach(function(value, index) {
		tokenIndex[value.text.beginOffset] = index;
	});
	return tokenIndex;
}
function score(body, annotations) {
	var tokenIndex = createTokenIndex(annotations);
	annotations.entities.forEach(function(value, index, a) {
		if (verhalten.includes(value.name)) {
			console.log(
				'' + value.name + ' mentioned at ' + value.mentions[0].text.beginOffset
			);
			console.log(
				annotations.sentences[0].sentiment.score,
				annotations.sentences[0].sentiment.magnitude
			);
		}
		// console.log(value);
	});

	// console.log("ok")
}

let body =
	'Das freundliche korrekte und zuvorkommende Verhalten von Frau De Bon war stets gut.';
let annotations = {
	sentences: [
		{
			text: {
				content:
					'Das freundliche korrekte und zuvorkommende Verhalten von Frau De Bon war stets gut.',
				beginOffset: 0,
			},
			sentiment: {
				magnitude: 0.8999999761581421,
				score: 0.8999999761581421,
			},
		},
	],
	tokens: [
		{
			text: {
				content: 'Das',
				beginOffset: 0,
			},
			partOfSpeech: {
				tag: 'DET',
				aspect: 'ASPECT_UNKNOWN',
				case: 'NOMINATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'NEUTER',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 5,
				label: 'DET',
			},
			lemma: 'Der',
		},
		{
			text: {
				content: 'freundliche',
				beginOffset: 4,
			},
			partOfSpeech: {
				tag: 'ADJ',
				aspect: 'ASPECT_UNKNOWN',
				case: 'NOMINATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'NEUTER',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 5,
				label: 'AMOD',
			},
			lemma: 'freundlich',
		},
		{
			text: {
				content: 'korrekte',
				beginOffset: 16,
			},
			partOfSpeech: {
				tag: 'ADJ',
				aspect: 'ASPECT_UNKNOWN',
				case: 'NOMINATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'FEMININE',
				mood: 'MOOD_UNKNOWN',
				number: 'PLURAL',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 1,
				label: 'CONJ',
			},
			lemma: 'korrekt',
		},
		{
			text: {
				content: 'und',
				beginOffset: 25,
			},
			partOfSpeech: {
				tag: 'CONJ',
				aspect: 'ASPECT_UNKNOWN',
				case: 'CASE_UNKNOWN',
				form: 'FORM_UNKNOWN',
				gender: 'GENDER_UNKNOWN',
				mood: 'MOOD_UNKNOWN',
				number: 'NUMBER_UNKNOWN',
				person: 'PERSON_UNKNOWN',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 1,
				label: 'CC',
			},
			lemma: 'und',
		},
		{
			text: {
				content: 'zuvorkommende',
				beginOffset: 29,
			},
			partOfSpeech: {
				tag: 'ADJ',
				aspect: 'ASPECT_UNKNOWN',
				case: 'ACCUSATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'NEUTER',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 1,
				label: 'CONJ',
			},
			lemma: 'zuvorkommend',
		},
		{
			text: {
				content: 'Verhalten',
				beginOffset: 43,
			},
			partOfSpeech: {
				tag: 'NOUN',
				aspect: 'ASPECT_UNKNOWN',
				case: 'ACCUSATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'NEUTER',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 10,
				label: 'NSUBJ',
			},
			lemma: 'Verhalten',
		},
		{
			text: {
				content: 'von',
				beginOffset: 53,
			},
			partOfSpeech: {
				tag: 'ADP',
				aspect: 'ASPECT_UNKNOWN',
				case: 'CASE_UNKNOWN',
				form: 'FORM_UNKNOWN',
				gender: 'GENDER_UNKNOWN',
				mood: 'MOOD_UNKNOWN',
				number: 'NUMBER_UNKNOWN',
				person: 'PERSON_UNKNOWN',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 5,
				label: 'PREP',
			},
			lemma: 'von',
		},
		{
			text: {
				content: 'Frau',
				beginOffset: 57,
			},
			partOfSpeech: {
				tag: 'NOUN',
				aspect: 'ASPECT_UNKNOWN',
				case: 'DATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'FEMININE',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 6,
				label: 'POBJ',
			},
			lemma: 'Frau',
		},
		{
			text: {
				content: 'De',
				beginOffset: 62,
			},
			partOfSpeech: {
				tag: 'NOUN',
				aspect: 'ASPECT_UNKNOWN',
				case: 'NOMINATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'FEMININE',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 7,
				label: 'APPOS',
			},
			lemma: 'De',
		},
		{
			text: {
				content: 'Bon',
				beginOffset: 65,
			},
			partOfSpeech: {
				tag: 'NOUN',
				aspect: 'ASPECT_UNKNOWN',
				case: 'NOMINATIVE',
				form: 'FORM_UNKNOWN',
				gender: 'MASCULINE',
				mood: 'MOOD_UNKNOWN',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 8,
				label: 'APPOS',
			},
			lemma: 'Bon',
		},
		{
			text: {
				content: 'war',
				beginOffset: 69,
			},
			partOfSpeech: {
				tag: 'VERB',
				aspect: 'ASPECT_UNKNOWN',
				case: 'CASE_UNKNOWN',
				form: 'FORM_UNKNOWN',
				gender: 'GENDER_UNKNOWN',
				mood: 'INDICATIVE',
				number: 'SINGULAR',
				person: 'THIRD',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'PAST',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 10,
				label: 'ROOT',
			},
			lemma: 'sein',
		},
		{
			text: {
				content: 'stets',
				beginOffset: 73,
			},
			partOfSpeech: {
				tag: 'ADV',
				aspect: 'ASPECT_UNKNOWN',
				case: 'CASE_UNKNOWN',
				form: 'FORM_UNKNOWN',
				gender: 'GENDER_UNKNOWN',
				mood: 'MOOD_UNKNOWN',
				number: 'NUMBER_UNKNOWN',
				person: 'PERSON_UNKNOWN',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 12,
				label: 'ADVMOD',
			},
			lemma: 'stets',
		},
		{
			text: {
				content: 'gut',
				beginOffset: 79,
			},
			partOfSpeech: {
				tag: 'ADJ',
				aspect: 'ASPECT_UNKNOWN',
				case: 'CASE_UNKNOWN',
				form: 'FORM_UNKNOWN',
				gender: 'GENDER_UNKNOWN',
				mood: 'MOOD_UNKNOWN',
				number: 'NUMBER_UNKNOWN',
				person: 'PERSON_UNKNOWN',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 10,
				label: 'ACOMP',
			},
			lemma: 'gut',
		},
		{
			text: {
				content: '.',
				beginOffset: 82,
			},
			partOfSpeech: {
				tag: 'PUNCT',
				aspect: 'ASPECT_UNKNOWN',
				case: 'CASE_UNKNOWN',
				form: 'FORM_UNKNOWN',
				gender: 'GENDER_UNKNOWN',
				mood: 'MOOD_UNKNOWN',
				number: 'NUMBER_UNKNOWN',
				person: 'PERSON_UNKNOWN',
				proper: 'NOT_PROPER',
				reciprocity: 'RECIPROCITY_UNKNOWN',
				tense: 'TENSE_UNKNOWN',
				voice: 'VOICE_UNKNOWN',
			},
			dependencyEdge: {
				headTokenIndex: 10,
				label: 'P',
			},
			lemma: '.',
		},
	],
	entities: [
		{
			mentions: [
				{
					text: {
						content: 'Verhalten',
						beginOffset: 43,
					},
					type: 'COMMON',
					sentiment: null,
				},
			],
			metadata: {},
			name: 'Verhalten',
			type: 'OTHER',
			salience: 0.5071178078651428,
			sentiment: null,
		},
		{
			mentions: [
				{
					text: {
						content: 'Frau',
						beginOffset: 57,
					},
					type: 'COMMON',
					sentiment: null,
				},
			],
			metadata: {},
			name: 'Frau',
			type: 'PERSON',
			salience: 0.32693472504615784,
			sentiment: null,
		},
		{
			mentions: [
				{
					text: {
						content: 'De Bon',
						beginOffset: 62,
					},
					type: 'PROPER',
					sentiment: null,
				},
			],
			metadata: {},
			name: 'De Bon',
			type: 'PERSON',
			salience: 0.16594745218753815,
			sentiment: null,
		},
	],
	categories: [],
	documentSentiment: {
		magnitude: 0.8999999761581421,
		score: 0.8999999761581421,
	},
	language: 'de',
};

score(body, annotations);
