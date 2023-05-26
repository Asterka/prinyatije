import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalExaminationComponent } from './clinical-examination.component';

describe('ClinicalExaminationComponent', () => {
  let component: ClinicalExaminationComponent;
  let fixture: ComponentFixture<ClinicalExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalExaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
