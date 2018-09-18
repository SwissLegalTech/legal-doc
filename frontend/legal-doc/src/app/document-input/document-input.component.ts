import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../shared/document.service';

@Component({
  selector: 'app-document-input',
  templateUrl: './document-input.component.html',
  styleUrls: ['./document-input.component.css']
})
export class DocumentInputComponent implements OnInit {
  text;
  constructor(public documentService: DocumentService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.text = document.getElementById('texttarea');
    // this.documentService.parseDocument(this.text.value);
    this.documentService.setInputText(this.text.value);
    this.documentService.toggleDocumentVisibility();
  }

}
