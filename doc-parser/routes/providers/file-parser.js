'use strict';
const pdfToJSON = require('pdf-parse');
const fs = require('fs');


/**
 * @method  click
 * @desc    parses PDF document to JSON format
 *
 * @param	{String}	type	legal document type
 */
function parseFile(req, res) {

    function render_page(pageData, ret) {
        //check documents https://mozilla.github.io/pdf.js/
        ret.text = ret.text ? ret.text : "";
     
        let render_options = {
            //replaces all occurrences of whitespace with standard spaces (0x20).
            normalizeWhitespace: false,
            //do not attempt to combine same line TextItem's.
            disableCombineTextItems: true
        }
     
        return pageData.getTextContent(render_options)
            .then(function(textContent) {
                let strings = textContent.items.map(item => item.str);
                let text = strings.join(' ');
                ret.text = `${ret.text}${text}\n\n`;
            });
    }
     
    let options = {
        pagerender: render_page
    }

    let dataBuffer = fs.readFileSync('./file-examples/test.pdf');
 
    pdfToJSON(dataBuffer,options).then((data) => {
    
        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata); 
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text); 

        res.send(data);
            
    });
    
}

module.exports = parseFile;