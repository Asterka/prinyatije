import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipInformationComponent } from './chip-information.component';

describe('ChipInformationComponent', () => {
  let component: ChipInformationComponent;
  let fixture: ComponentFixture<ChipInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
