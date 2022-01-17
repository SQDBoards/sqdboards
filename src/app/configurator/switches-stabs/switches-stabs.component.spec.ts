import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesStabsComponent } from './switches-stabs.component';

describe('SwitchesStabsComponent', () => {
  let component: SwitchesStabsComponent;
  let fixture: ComponentFixture<SwitchesStabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchesStabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchesStabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
