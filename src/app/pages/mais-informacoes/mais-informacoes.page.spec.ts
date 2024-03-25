import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaisInformacoesPage } from './mais-informacoes.page';

describe('MaisInformacoesPage', () => {
  let component: MaisInformacoesPage;
  let fixture: ComponentFixture<MaisInformacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaisInformacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
