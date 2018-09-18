import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-presentation',
  templateUrl: './document-presentation.component.html',
  styleUrls: ['./document-presentation.component.css']
})
export class DocumentPresentationComponent implements OnInit {
  parsedDocument;
  constructor() { }

  ngOnInit() {
    this.parsedDocument = {
      name: 'Angelina Jolie',
      address: 'Somewhere in America',
      paragraphs: [
        {
          meta: 'This paragraph is neutral',
          text: 'This is a test paragraph',
          sentences: []
        },
        {
          meta: 'mock',
          text: 'This is a test paragraph',
          sentences: [
            {text: 'You were working very good', score: 8, hint: 'GOOD for you!'},
            {text: 'You were working not so good', score: 2, hint: 'Uuu so BAD!'}
          ]
        }
      ]
    };
  }

}
