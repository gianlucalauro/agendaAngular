import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperoaccountComponent } from './recuperoaccount.component';

describe('RecuperoaccountComponent', () => {
  let component: RecuperoaccountComponent;
  let fixture: ComponentFixture<RecuperoaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperoaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperoaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
