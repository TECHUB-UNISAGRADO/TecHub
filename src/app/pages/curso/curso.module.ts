import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';

import { CursoPage } from './curso.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaisInformacoesComponent } from './mais-informacoes/mais-informacoes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule,
    SharedModule,
  ],
  declarations: [CursoPage, MaisInformacoesComponent]
})
export class CursoPageModule {}
