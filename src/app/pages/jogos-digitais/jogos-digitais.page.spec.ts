import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogosDigitaisPage } from './jogos-digitais.page';

describe('JogosDigitaisPage', () => {
  let component: JogosDigitaisPage;
  let fixture: ComponentFixture<JogosDigitaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JogosDigitaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
