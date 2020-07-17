import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaContattoComponent } from './modifica-contatto.component';

describe('ModificaContattoComponent', () => {
  let component: ModificaContattoComponent;
  let fixture: ComponentFixture<ModificaContattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaContattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
