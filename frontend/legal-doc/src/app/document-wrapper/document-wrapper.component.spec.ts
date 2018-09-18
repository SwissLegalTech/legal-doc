import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentWrapperComponent } from './document-wrapper.component';

describe('DocumentWrapperComponent', () => {
  let component: DocumentWrapperComponent;
  let fixture: ComponentFixture<DocumentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
