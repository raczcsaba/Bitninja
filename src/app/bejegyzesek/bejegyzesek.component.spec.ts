import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BejegyzesekComponent } from './bejegyzesek.component';

describe('BejegyzesekComponent', () => {
  let component: BejegyzesekComponent;
  let fixture: ComponentFixture<BejegyzesekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BejegyzesekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BejegyzesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
