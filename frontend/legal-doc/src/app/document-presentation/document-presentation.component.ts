import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../shared/document.service';

@Component({
  selector: 'app-document-presentation',
  templateUrl: './document-presentation.component.html',
  styleUrls: ['./document-presentation.component.css']
})
export class DocumentPresentationComponent implements OnInit {
  parsedDocument;
  finalScore = '';
  contentScore = '';
  structureScore = '';
  constructor(private documentService: DocumentService) {
  }

  ngOnInit() {
    this.documentService.parseDocument().subscribe(data => {
      this.parsedDocument = data;
      this.parsedDocument.paragraphs.forEach(paragraph => {
        if(paragraph.sentences) {
          paragraph.sentences.forEach(sentence => {
            if(sentence.score < 0) {
              this.finalScore = 'mediocre';
            }
          });
        }
      });
      if(this.finalScore === '') {
        this.finalScore = 'good';
      }
      this.contentScore = 'bad';
      this.structureScore = 'good';
    });
  }

  showMe() {
    console.log(this.parsedDocument);
  }

  takeMeBack() {
    this.documentService.toggleDocumentVisibility();
  }

}
