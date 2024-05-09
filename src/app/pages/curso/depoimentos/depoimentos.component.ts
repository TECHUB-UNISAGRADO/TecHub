import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent {

  @Input() public depoimentos!: string[];

  constructor() { }
}
