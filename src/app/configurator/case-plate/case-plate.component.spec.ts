import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePlateComponent } from './case-plate.component';

describe('CasePlateComponent', () => {
  let component: CasePlateComponent;
  let fixture: ComponentFixture<CasePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
