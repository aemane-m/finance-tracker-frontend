import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportPage } from './import-export-page';

describe('ImportExportPage', () => {
  let component: ImportExportPage;
  let fixture: ComponentFixture<ImportExportPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportExportPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportExportPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
