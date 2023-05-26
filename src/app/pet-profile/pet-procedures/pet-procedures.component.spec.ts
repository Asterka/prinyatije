import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProceduresComponent } from './pet-procedures.component';

describe('PetProceduresComponent', () => {
  let component: PetProceduresComponent;
  let fixture: ComponentFixture<PetProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetProceduresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
