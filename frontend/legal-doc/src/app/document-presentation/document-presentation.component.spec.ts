import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPresentationComponent } from './document-presentation.component';

describe('DocumentPresentationComponent', () => {
  let component: DocumentPresentationComponent;
  let fixture: ComponentFixture<DocumentPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
