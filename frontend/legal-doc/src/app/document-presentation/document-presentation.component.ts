import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../shared/document.service';

@Component({
  selector: 'app-document-presentation',
  templateUrl: './document-presentation.component.html',
  styleUrls: ['./document-presentation.component.css']
})
export class DocumentPresentationComponent implements OnInit {
  parsedDocument;
  constructor(private documentService: DocumentService) {
  }

  ngOnInit() {
    this.documentService.parseDocument().subscribe(data => {
      this.parsedDocument = data;
    });
  }

  showMe() {
    console.log(this.parsedDocument);
  }

  takeMeBack() {
    this.documentService.toggleDocumentVisibility();
  }

}
