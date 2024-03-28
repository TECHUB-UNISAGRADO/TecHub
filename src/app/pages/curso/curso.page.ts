import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage {

  public voltar: boolean = true;
  public titulo: string = "Ciência da Computação";
  public email = "computacao@unisagrado.edu.br";

  constructor() { }
}
