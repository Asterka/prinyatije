import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavPageComponent } from './main-nav-page.component';

describe('MainNavPageComponent', () => {
  let component: MainNavPageComponent;
  let fixture: ComponentFixture<MainNavPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
