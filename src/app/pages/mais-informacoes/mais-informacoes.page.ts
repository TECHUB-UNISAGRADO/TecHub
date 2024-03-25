import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mais-informacoes',
  templateUrl: './mais-informacoes.page.html',
  styleUrls: ['./mais-informacoes.page.scss'],
})
export class MaisInformacoesPage {

  public voltar: boolean = true;
  public titulo: string = "Mais Informações";

  constructor() { }

}
