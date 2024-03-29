import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mais-informacoes',
  templateUrl: './mais-informacoes.component.html',
  styleUrls: ['./mais-informacoes.component.scss'],
})
export class MaisInformacoesComponent implements OnInit {

  @Input() public id!: string;

  public url!: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    const link = "https://unisagrado.edu.br/graduacao/" + this.id;
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
