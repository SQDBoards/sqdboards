import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FofNotFoundComponent } from './fof-not-found.component';

describe('FofNotFoundComponent', () => {
  let component: FofNotFoundComponent;
  let fixture: ComponentFixture<FofNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FofNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FofNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
