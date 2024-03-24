import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.fecharSplashScreen();
  }

  private fecharSplashScreen(): void {
    setTimeout(() => {
      this.navCtrl.navigateRoot('', { replaceUrl: true });
    }, 2500);
  }
}
