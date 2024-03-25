import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaisInformacoesPageRoutingModule } from './mais-informacoes-routing.module';

import { MaisInformacoesPage } from './mais-informacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaisInformacoesPageRoutingModule,
    SharedModule
  ],
  declarations: [MaisInformacoesPage]
})
export class MaisInformacoesPageModule {}
