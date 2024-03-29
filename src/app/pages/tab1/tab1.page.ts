import { Component } from '@angular/core';
import { ICurso } from 'src/app/models/ICurso.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public titulo: string = "CURSOS";

  public cursos: ICurso[] = [
    {
      id: "ciencia-da-computacao",
      nome: "Ciência da Computação",
      imagem: "assets/imgs/cursos/ciencia-da-computacao.jpg"
    },
    {
      id: "jogos-digitais",
      nome: "Jogos Digitais",
      imagem: "assets/imgs/cursos/jogos-digitais.jpg"
    }
  ];

  constructor() { }
}
