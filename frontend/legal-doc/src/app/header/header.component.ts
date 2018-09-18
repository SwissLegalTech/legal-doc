import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {WINDOW} from '../browser.window.ref';
import {DOCUMENT} from '@angular/common';
import {DocumentService} from '../shared/document.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  height = 30;
  isScrolled = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private documentService: DocumentService) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.isScrolled = true;
      this.height = 60;
    } else if (this.isScrolled && number < 10) {
      this.isScrolled = false;
      this.height = 120;
    }
  }

  showDocumentWindow() {
    this.documentService.toggleMainPageVisibility();
  }

}
