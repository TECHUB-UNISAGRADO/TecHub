import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabsPage } from './labs.page';

describe('LabsPage', () => {
  let component: LabsPage;
  let fixture: ComponentFixture<LabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
