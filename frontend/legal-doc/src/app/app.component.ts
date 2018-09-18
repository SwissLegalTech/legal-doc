import { Component } from '@angular/core';
import {DocumentService} from './shared/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public documentService: DocumentService) {}

  // resizeHeaderOnScroll(): void {
  //   window.pageYOffset
  // }
}
