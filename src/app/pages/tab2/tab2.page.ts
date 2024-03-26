import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public titulo: string = "LABORATÓRIOS";

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  redirectF008() {
    let lab = '008';
    this.navCtrl.navigateForward('/labs/' + lab);
  }

  redirectF102() {
    let lab = '102';
    this.navCtrl.navigateForward('/labs/' + lab);
  }

  redirectF108() {
    let lab = '108';
    this.navCtrl.navigateForward('/labs/' + lab);
  }

}
