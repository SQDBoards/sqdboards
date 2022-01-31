import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardSizeChartComponent } from './keyboard-size-chart.component';

describe('KeyboardSizeChartComponent', () => {
  let component: KeyboardSizeChartComponent;
  let fixture: ComponentFixture<KeyboardSizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardSizeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardSizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
