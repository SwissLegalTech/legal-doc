// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();
const score = require('./score');

const UTF16 = 2;

function analyzeSentiment(req, res) {

    var text = req.query.text;
    console.log(text)

    var document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
// Detects the sentiment of the text
    client
        .analyzeSentiment({document: document})
        .then(results => {
            const sentiment = results;

            res.send(sentiment)
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
function analyzeDocument(req, res) {

    var text = req.query.text;
    console.log(text)

    var document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
// Detects the sentiment of the text
    client
        .annotateText({document: document,
            features:{
                extractSyntax: false,
                extractEntities: true,
                extractDocumentSentiment: true
            },
            encodingType: UTF16
        })
        .then(results => {
            const annotations = results[0];
            score(annotations);
            res.send(annotations)
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
module.exports = {
    analyzeSentiment: analyzeSentiment,
    analyzeDocument: analyzeDocument
};