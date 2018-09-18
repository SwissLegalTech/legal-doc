# LegalDoc

Team Leader Slack: __Maria De Bon__

## About

In Switzerland there are approximately 1 million references per year. Article 330a OR states tthe obligation of an employer to draw up a certificate of employment at any time at the employee's request. Employers are obliged to comment not only on the nature and duration of the employment but also on the service rendered and the conduct. The projects objective is to avoid legal proceedings, to offer reliable and quick help to the customer

## Development

### Requirements

Application developed for this project require NodeJS and NPM for building and running.

#### Front-end

Front-end application written in Angular is placed inside __frontend__ directory. It serves a website where you can input the reference letter and get a visual analysis result.

#### Back-end

Server which is responsible for the document analysis (placed inside __doc-parser__ directory) is developed in NodeJS using Express library to set up a simple HTTP Server. With the addition of __Cloud Natural Language__ by Google. A set of analysis is done in order to score the document and return data to the front-end.

#### APIs, libraries...

This project uses a couple of external libraries (more are listed in projects package config file):

 - Angular
 - Express
 - natural (NLP library for NodeJS)
 - Google Cloud Natural Language API



made with ♥ by LegalDoc Team
