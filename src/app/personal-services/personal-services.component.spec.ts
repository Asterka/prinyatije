import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalServicesComponent } from './personal-services.component';

describe('PersonalServicesComponent', () => {
  let component: PersonalServicesComponent;
  let fixture: ComponentFixture<PersonalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
