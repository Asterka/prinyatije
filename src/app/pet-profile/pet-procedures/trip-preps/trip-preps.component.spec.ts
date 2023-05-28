import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPrepsComponent } from './trip-preps.component';

describe('TripPrepsComponent', () => {
  let component: TripPrepsComponent;
  let fixture: ComponentFixture<TripPrepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPrepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripPrepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
