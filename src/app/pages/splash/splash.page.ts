import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.fecharSplashScreen();
  }

  private fecharSplashScreen(): void {
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 3000);
  }
}