import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcapsComponent } from './kcaps.component';

describe('KcapsComponent', () => {
  let component: KcapsComponent;
  let fixture: ComponentFixture<KcapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KcapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
