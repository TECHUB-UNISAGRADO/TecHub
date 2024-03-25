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
    this.navCtrl.navigateForward('/f008');
  }

}
