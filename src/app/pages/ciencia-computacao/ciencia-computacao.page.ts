import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciencia-computacao',
  templateUrl: './ciencia-computacao.page.html',
  styleUrls: ['./ciencia-computacao.page.scss'],
})
export class CienciaComputacaoPage {

  public voltar: boolean = true;
  public titulo: string = "Ciência da Computação";
  public email = "computacao@unisagrado.edu.br";

  constructor() { }
}
