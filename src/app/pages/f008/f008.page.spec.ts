import { ComponentFixture, TestBed } from '@angular/core/testing';
import { F008Page } from './f008.page';

describe('F008Page', () => {
  let component: F008Page;
  let fixture: ComponentFixture<F008Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(F008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
