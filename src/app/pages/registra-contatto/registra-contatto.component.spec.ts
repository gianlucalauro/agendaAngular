import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraContattoComponent } from './registra-contatto.component';

describe('RegistraContattoComponent', () => {
  let component: RegistraContattoComponent;
  let fixture: ComponentFixture<RegistraContattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraContattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
