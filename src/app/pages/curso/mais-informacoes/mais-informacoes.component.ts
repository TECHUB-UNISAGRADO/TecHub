import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mais-informacoes',
  templateUrl: './mais-informacoes.component.html',
  styleUrls: ['./mais-informacoes.component.scss'],
})
export class MaisInformacoesComponent {

  public titulo: string = "Mais Informações";
  public url: SafeResourceUrl;

  canDismiss = false;

  constructor(private domSanitizer: DomSanitizer) {
    const link = "https://unisagrado.edu.br/graduacao/ciencia-da-computacao";
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
