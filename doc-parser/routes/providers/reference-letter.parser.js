// Imports the Google Cloud client library
const language = require('@google-cloud/language');
const async = require('async');
const letterStructureAnalyze = require('./reference-letter-strucutre.analyzer');

// Creates a client
const client = new language.LanguageServiceClient();

function parseFile(req, res) {
	// let text = `Arbeitszeugnis\nFrau Maria De Bon, geboren am 07.06.1988, wohnhaft in Zürich, war vom 14. Oktober 2011 bis am 10. September 2012 in unserer Kanzlei als Anwaltsassistentin tätig.\nLutz Rechtsanwälte ist eine Kanzlei, die vorwiegend im Wirtschafts- und Gesellschaftsrecht sowie in Zivil-, Immobilien- und Mietrecht tätig ist und verfügt über 5 Rechtsanwältinnen und Rechtsanwälte.\nDas Aufgabengebiet von Frau Maria De Bon umfasste hauptsächlich folgende Aufgaben: Erstellen und Redaktion von Korrespondenz und juristischen Texten jeder Art (Rechtsschriften, Gutachten, Plädoyernotizen, Protokolle) in deutscher und englischer Sprache nach Diktat, Vorlage und Anweisung;Eigenständige Erledigung administrativer Korrespondenz;Zusammenstellen aller erforderlichen Unterlagen für Rechtsschriften und andere grössere Eingaben;Selbständige Erledigung der in einer Anwaltskanzlei anfallenden administrativen Tätigkeiten wie Rechnungsstellung, Debitorenkontrolle, Mahnwesen, Termin- und Fristenverwaltung etc.\nWir schätzen Frau Maria De Bon als sehr pflichtbewusste, vertrauenswürdige und einsatzfreudige Mitarbeiterin. Sie arbeitete sich dank ihrer sehr guten Auffassungsgabe sehr schnell in ihr vielfältiges Arbeitsgebiet ein. Wir lernten sie als einsatzbereite, zuverlässige und pflichtbewusste Teamkollegin kennen. Sie erledigte ihre Aufgaben speditiv und stets zu unserer vollsten Zufriedenheit. Ihre guten Französisch und Englischkenntnisse kamen auf der Geschäftsstelle bestens zum Tragen.\nDas freundliche, korrekte und zuvorkommende Verhalten von Frau Maria De Bon gegenüber Vorgesetzten, Mitarbeitern und Klienten wurde von allen sehr geschätzt und ermöglichte eine stets angenehme und vertrauensvolle Zusammenarbeit.\nDas Arbeitsverhältnis mit Frau De Bon war von Anfang an befristet und endet per 31. Juli 2012.\nWir bedauern den Weggang von Frau Maria De Bon sehr und wünschen ihr in beruflicher und privater Hinsicht weiterhin viel Erfolg und alles Gute.`;
	// 	let text = `Frau Maria De Bon, geboren am 07.06.1988, wohnhaft in Zürich, war vom 14. Oktober 2011 bis am 10. September 2012 in unserer Kanzlei als Anwaltsassistentin tätig.

	// Lutz Rechtsanwälte ist eine Kanzlei, die vorwiegend im Wirtschafts- und Gesellschaftsrecht sowie in Zivil-, Immobilien- und Mietrecht tätig ist und verfügt über 5 Rechtsanwältinnen und Rechtsanwälte.

	// Das Aufgabengebiet von Frau Maria De Bon umfasste hauptsächlich folgende Aufgaben:

	//  Erstellen und Redaktion von Korrespondenz und juristischen Texten jeder Art (Rechtsschriften, Gutachten, Plädoyernotizen, Protokolle) in deutscher und englischer Sprache nach Diktat, Vorlage und Anweisung;

	//  Eigenständige Erledigung administrativer Korrespondenz;

	//  Zusammenstellen aller erforderlichen Unterlagen für Rechtsschriften und andere grössere Eingaben;

	//  Selbständige Erledigung der in einer Anwaltskanzlei anfallenden administrativen Tätigkeiten wie Rechnungsstellung, Debitorenkontrolle, Mahnwesen, Termin- und Fristenverwaltung etc.

	// Wir haben Frau Maria De Bon als pflichtbewusste, vertrauenswürdige und einsatzfreudige Mitarbeiterin wahrgenommen. Sie arbeitete sich dank ihrer guten Auffassungsgabe schnell in ihr vielfältiges Arbeitsgebiet ein. Wir lernten sie als einsatzbereite, zuverlässige und pflichtbewusste Kollegin kennen. Sie erledigte ihre Aufgaben speditiv und zu unserer Zufriedenheit. Ihre guten Französisch und Englischkenntnisse kamen auf der Geschäftsstelle bestens zum Tragen.

	// Das freundliche, korrekte und zuvorkommende Verhalten von Frau Maria De Bon gegenüber Vorgesetzten, Mitarbeitern und Klienten wurde von allen geschätzt und ermöglichte eine angenehme und vertrauensvolle Zusammenarbeit.

	// Das Arbeitsverhältnis mit Frau De Bon war von Anfang an befristet und endet per 31. Juli 2012.

	// Wir bedauern den Weggang von Frau Maria De Bon und wünschen ihr in beruflicher und privater Hinsicht weiterhin viel Erfolg.`.toString();

	let text = req.body.doc;

	// replace list symbols
	let parsedText = text.replace(/\n\n\*/gm, ' * ');
	parsedText = parsedText.replace(/\n\*/gm, ' * ');

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
