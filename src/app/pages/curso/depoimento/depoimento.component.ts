import { Component, Input, OnInit } from '@angular/core';
import { IDepoimento } from 'src/app/models/IDepoimento.model';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss'],
})
export class DepoimentoComponent implements OnInit {

  @Input() public id!: string;

  public depoimento: IDepoimento = {
    autor: " ",
    depoimento: " "
  };

  constructor() { }

  ngOnInit() {
    this.carregaDepoimento();
  }

  private carregaDepoimento(): void {
    switch (this.id) {
      case 'ciencia-da-computacao':
        this.depoimento.autor = 'Vini';
        this.depoimento.depoimento = 'Depoimento';
        break;
      case 'jogos-digitais':
        this.depoimento.autor = 'Robson'
        this.depoimento.depoimento = 'Depoimento';
        break;
    }
  }
}
