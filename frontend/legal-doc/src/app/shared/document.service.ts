import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DocumentService {
  isDocumentInfoVisible = false;
  isMainPageVisible = true;
  parsedData;
  inputText;

  constructor(private http: HttpClient) {}

  public toggleDocumentVisibility() {
    this.isDocumentInfoVisible = !this.isDocumentInfoVisible;
  }

  public toggleMainPageVisibility() {
    this.isMainPageVisible = !this.isMainPageVisible;
  }

  public parseDocument() {
    return this.http.post('http://localhost:8081/v10/parse', {doc: this.inputText}, {});
  }

  public getParsedData() {
    return this.parsedData;
  }

  public setInputText(text) {
    this.inputText = text;
}
}
