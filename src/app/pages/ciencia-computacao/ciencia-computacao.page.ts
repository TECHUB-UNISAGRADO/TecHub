import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciencia-computacao',
  templateUrl: './ciencia-computacao.page.html',
  styleUrls: ['./ciencia-computacao.page.scss'],
})
export class CienciaComputacaoPage implements OnInit {
  public titulo: string = "Ciência da Computação";

  constructor() { }

  ngOnInit() {
  }

}
