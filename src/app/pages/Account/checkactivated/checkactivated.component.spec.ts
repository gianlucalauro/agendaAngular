import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckactivatedComponent } from './checkactivated.component';

describe('CheckactivatedComponent', () => {
  let component: CheckactivatedComponent;
  let fixture: ComponentFixture<CheckactivatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckactivatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
