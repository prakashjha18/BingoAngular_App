import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaheNotFoundComponent } from './pahe-not-found.component';

describe('PaheNotFoundComponent', () => {
  let component: PaheNotFoundComponent;
  let fixture: ComponentFixture<PaheNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaheNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaheNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
