let verhalten = ["Umgang", "Vorgesetzte", "Arbeitskollegen", "Kunden", "Geschäftspartner", "Zusammenarbeit", "Auftreten", "Verhalten"]

let good = ["sehr", "äusserst", "immer", "stets", "jederzeit", "absolut", "gleichermassen", "gleichermassen sehr", "ausserordentlich", "hoch", "weiterhin", "hohe", "gross"]
// let good_pre = ["hohe","gross"]
let bad = ["in der regel", "meist", "im Allgemeinen", "oft"]

function createTokenIndex(annotations) {
    var tokenIndex = [];
    annotations.tokens.forEach(function (value, index) {
        tokenIndex[value.text.beginOffset] = index;
    });
    return tokenIndex;
}

function scoreSentence(sentence) {
    var score = 0;
    var text = sentence.text.content;
    good.forEach(function (value) {
        if (text.includes(value)) {
            score++;
        }

    })
    bad.forEach(function (value) {
        if (text.includes(value)) {
            score++;
        }
    })
    sentence = {
        score: score,
        content: sentence.text.content,
        sentiment: sentence.sentiment

    }
    return sentence
}

function score(annotations) {
    annotations.sentences.forEach(function (sentence, i, a) {
        a[i]=scoreSentence(sentence)
    })
}
module.exports = score;

let annotations =
    {
        "sentences": [
            {
                "text": {
                    "content": "Wir schätzen Frau Maria De Bon als sehr pflichtbewusste, vertrauenswürdige und einsatzfreudige Mitarbeiterin.",
                    "beginOffset": 0
                },
                "sentiment": {
                    "magnitude": 0.8999999761581421,
                    "score": 0.8999999761581421
                }
            },
            {
                "text": {
                    "content": "Sie arbeitete sich dank ihrer sehr guten Auffassungsgabe sehr schnell in ihr vielfältiges Arbeitsgebiet ein.",
                    "beginOffset": 110
                },
                "sentiment": {
                    "magnitude": 0.8999999761581421,
                    "score": 0.8999999761581421
                }
            },
            {
                "text": {
                    "content": "Wir lernten sie als einsatzbereite, zuverlässige und pflichtbewusste Teamkollegin kennen.",
                    "beginOffset": 219
                },
                "sentiment": {
                    "magnitude": 0.8999999761581421,
                    "score": 0.8999999761581421
                }
            },
            {
                "text": {
                    "content": "Sie erledigte ihre Aufgaben speditiv und stets zu unserer vollsten Zufriedenheit.",
                    "beginOffset": 309
                },
                "sentiment": {
                    "magnitude": 0.8999999761581421,
                    "score": 0.8999999761581421
                }
            },
            {
                "text": {
                    "content": "Ihre guten Französisch und Englischkenntnisse kamen auf der Geschäftsstelle bestens zum Tragen.",
                    "beginOffset": 391
                },
                "sentiment": {
                    "magnitude": 0.8999999761581421,
                    "score": 0.8999999761581421
                }
            }
        ],
        "tokens": [],
        "entities": [
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Mitarbeiterin",
                            "beginOffset": 95
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Mitarbeiterin",
                "type": "PERSON",
                "salience": 0.2683623433113098,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Frau",
                            "beginOffset": 13
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Frau",
                "type": "PERSON",
                "salience": 0.2042006254196167,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Maria De Bon",
                            "beginOffset": 18
                        },
                        "type": "PROPER",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Maria De Bon",
                "type": "PERSON",
                "salience": 0.14326995611190796,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Auffassungsgabe",
                            "beginOffset": 151
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Auffassungsgabe",
                "type": "OTHER",
                "salience": 0.08416212350130081,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Teamkollegin",
                            "beginOffset": 288
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Teamkollegin",
                "type": "PERSON",
                "salience": 0.050302308052778244,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Arbeitsgebiet",
                            "beginOffset": 200
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Arbeitsgebiet",
                "type": "OTHER",
                "salience": 0.04926019906997681,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Zufriedenheit",
                            "beginOffset": 376
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Zufriedenheit",
                "type": "OTHER",
                "salience": 0.03979170694947243,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Aufgaben",
                            "beginOffset": 328
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Aufgaben",
                "type": "OTHER",
                "salience": 0.03284493833780289,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Französisch",
                            "beginOffset": 402
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Französisch",
                "type": "OTHER",
                "salience": 0.03195144981145859,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Englischkenntnisse",
                            "beginOffset": 418
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Englischkenntnisse",
                "type": "OTHER",
                "salience": 0.03195144981145859,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Geschäftsstelle",
                            "beginOffset": 451
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Geschäftsstelle",
                "type": "LOCATION",
                "salience": 0.03195144981145859,
                "sentiment": null
            },
            {
                "mentions": [
                    {
                        "text": {
                            "content": "Tragen",
                            "beginOffset": 479
                        },
                        "type": "COMMON",
                        "sentiment": null
                    }
                ],
                "metadata": {},
                "name": "Tragen",
                "type": "OTHER",
                "salience": 0.03195144981145859,
                "sentiment": null
            }
        ],
        "categories": [],
        "documentSentiment": {
            "magnitude": 4.699999809265137,
            "score": 0.8999999761581421
        },
        "language": "de"
    };

// score(annotations);
// console.log(annotations.sentences);