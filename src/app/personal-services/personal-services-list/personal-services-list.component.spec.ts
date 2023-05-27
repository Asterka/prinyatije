import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalServicesListComponent } from './personal-services-list.component';

describe('PersonalServicesListComponent', () => {
  let component: PersonalServicesListComponent;
  let fixture: ComponentFixture<PersonalServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalServicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
