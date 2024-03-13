import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-ciencia-computacao',
  templateUrl: './ciencia-computacao.page.html',
  styleUrls: ['./ciencia-computacao.page.scss'],
})
export class CienciaComputacaoPage{
  public titulo: string = "Ciência da Computação";

  constructor(private navCtrl: NavController) { }

  returnHome(){
    this.navCtrl.pop();
  }

}
