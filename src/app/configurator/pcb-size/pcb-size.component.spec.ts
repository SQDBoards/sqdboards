import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbSizeComponent } from './pcb-size.component';

describe('PcbSizeComponent', () => {
  let component: PcbSizeComponent;
  let fixture: ComponentFixture<PcbSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcbSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcbSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
