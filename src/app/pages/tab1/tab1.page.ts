import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public titulo: string = "CURSOS";

  constructor(private navCtrl: NavController) {}
  
  redirectCC() {
    this.navCtrl.navigateForward('/ciencia-computacao');
  }

  redirectJD() {
    this.navCtrl.navigateForward('/jogos-digitais');
  }

}
