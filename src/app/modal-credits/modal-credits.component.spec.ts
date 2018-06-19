import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreditsComponent } from './modal-credits.component';

describe('ModalCreditsComponent', () => {
  let component: ModalCreditsComponent;
  let fixture: ComponentFixture<ModalCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
