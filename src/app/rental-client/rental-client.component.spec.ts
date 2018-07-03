import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalClientComponent } from './rental-client.component';

describe('RentalClientComponent', () => {
  let component: RentalClientComponent;
  let fixture: ComponentFixture<RentalClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
