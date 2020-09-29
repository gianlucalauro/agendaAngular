import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveaccountComponent } from './activeaccount.component';

describe('ActiveaccountComponent', () => {
  let component: ActiveaccountComponent;
  let fixture: ComponentFixture<ActiveaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
