import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-jogos-digitais',
  templateUrl: './jogos-digitais.page.html',
  styleUrls: ['./jogos-digitais.page.scss'],
})
export class JogosDigitaisPage implements OnInit {
  public titulo: string = "Jogos Digitais";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  returnHome(){
    this.navCtrl.pop();
  }
}
