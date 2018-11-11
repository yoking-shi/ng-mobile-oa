import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliesNewComponent } from './new.component';

describe('AppliesNewComponent', () => {
  let component: AppliesNewComponent;
  let fixture: ComponentFixture<AppliesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
