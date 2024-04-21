import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public titulo: string = 'CRÉDITOS';

  public devs: string[] = ['Échelly Paiva', 'Gabriel José Soto Ravanhan', 'Larissa Alves de Souza', 'Samuel Fernandes Monteiro'];
  public disciplina: string = 'Desenvolvimento de Software';
  public professor: string = 'Prof. Dr. Elvio Gilberto da Silva';

  constructor() { }

}
