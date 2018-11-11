import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashIndexComponent } from './index.component';

describe('SplashIndexComponent', () => {
  let component: SplashIndexComponent;
  let fixture: ComponentFixture<SplashIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
