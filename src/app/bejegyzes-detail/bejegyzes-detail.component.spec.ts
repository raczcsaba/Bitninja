import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BejegyzesDetailComponent } from './bejegyzes-detail.component';

describe('BejegyzesDetailComponent', () => {
  let component: BejegyzesDetailComponent;
  let fixture: ComponentFixture<BejegyzesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BejegyzesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BejegyzesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
