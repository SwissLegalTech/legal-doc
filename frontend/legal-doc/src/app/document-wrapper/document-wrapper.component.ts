import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../shared/document.service';

@Component({
  selector: 'app-document-wrapper',
  templateUrl: './document-wrapper.component.html',
  styleUrls: ['./document-wrapper.component.css']
})
export class DocumentWrapperComponent implements OnInit {

  constructor(public documentService: DocumentService) { }

  ngOnInit() {
  }

}
