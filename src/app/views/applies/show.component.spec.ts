import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliesShowComponent } from './show.component';

describe('AppliesShowComponent', () => {
  let component: AppliesShowComponent;
  let fixture: ComponentFixture<AppliesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
