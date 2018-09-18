import {Injectable} from '@angular/core';

@Injectable()
export class DocumentService {
  isDocumentInfoVisible = false;
  isMainPageVisible = true;

  public toggleDocumentVisibility() {
    this.isDocumentInfoVisible = !this.isDocumentInfoVisible;
  }

  public toggleMainPageVisibility() {
    this.isMainPageVisible = !this.isMainPageVisible;
  }
}
