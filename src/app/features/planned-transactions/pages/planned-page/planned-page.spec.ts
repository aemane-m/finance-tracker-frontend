import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedPage } from './planned-page';

describe('PlannedPage', () => {
  let component: PlannedPage;
  let fixture: ComponentFixture<PlannedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannedPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
