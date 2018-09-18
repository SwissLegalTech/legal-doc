import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../shared/document.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-document-input',
  templateUrl: './document-input.component.html',
  styleUrls: ['./document-input.component.css']
})
export class DocumentInputComponent implements OnInit {
  text;
  constructor(private documentService: DocumentService,
              private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.text = document.getElementById('texttarea');
    // this.documentService.parseDocument(this.text.value);
    this.documentService.setInputText(this.text.value);
    this.documentService.toggleDocumentVisibility();
  }

}
