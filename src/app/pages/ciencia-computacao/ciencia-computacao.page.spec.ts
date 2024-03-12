import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CienciaComputacaoPage } from './ciencia-computacao.page';

describe('CienciaComputacaoPage', () => {
  let component: CienciaComputacaoPage;
  let fixture: ComponentFixture<CienciaComputacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CienciaComputacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
