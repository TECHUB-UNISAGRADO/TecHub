import { Component } from '@angular/core';
import { ILaboratorio } from 'src/app/models/ILaboratorio.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public titulo: string = "LABORATÓRIOS";

  public laboratorios: ILaboratorio[] = [
    {
      id: "008",
      nome: "F-008"
    },
    {
      id: "102",
      nome: "F-102"
    },
    {
      id: "108",
      nome: "F-108"
    }
  ]

  constructor() { }
}
