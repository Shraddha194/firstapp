import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrDemoComponent } from './arr-demo.component';

describe('ArrDemoComponent', () => {
  let component: ArrDemoComponent;
  let fixture: ComponentFixture<ArrDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
