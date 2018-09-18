import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/shared/document.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
  }

  showDocumentWindow() {
    this.documentService.toggleMainPageVisibility();
  }
}
