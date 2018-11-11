import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliesIndexComponent } from './index.component';

describe('AppliesIndexComponent', () => {
  let component: AppliesIndexComponent;
  let fixture: ComponentFixture<AppliesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
