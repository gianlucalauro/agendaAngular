import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraAccountComponent } from './registra-account.component';

describe('RegistraAccountComponent', () => {
  let component: RegistraAccountComponent;
  let fixture: ComponentFixture<RegistraAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
