import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelContentComponentComponent } from './model-content-component.component';

describe('ModelContentComponentComponent', () => {
  let component: ModelContentComponentComponent;
  let fixture: ComponentFixture<ModelContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
