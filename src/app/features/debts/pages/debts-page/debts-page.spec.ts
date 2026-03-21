import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsPage } from './debts-page';

describe('DebtsPage', () => {
  let component: DebtsPage;
  let fixture: ComponentFixture<DebtsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
