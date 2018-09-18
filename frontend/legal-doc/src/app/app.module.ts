import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {WINDOW_PROVIDERS} from './browser.window.ref';
import { DocumentInputComponent } from './document-input/document-input.component';
import { DocumentPresentationComponent } from './document-presentation/document-presentation.component';
import {DocumentService} from './shared/document.service';
import { DocumentWrapperComponent } from './document-wrapper/document-wrapper.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentInputComponent,
    DocumentPresentationComponent,
    DocumentWrapperComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [ WINDOW_PROVIDERS, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
