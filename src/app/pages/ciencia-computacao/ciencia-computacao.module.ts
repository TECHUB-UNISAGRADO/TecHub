import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciaComputacaoPageRoutingModule } from './ciencia-computacao-routing.module';

import { CienciaComputacaoPage } from './ciencia-computacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciaComputacaoPageRoutingModule
  ],
  declarations: [CienciaComputacaoPage]
})
export class CienciaComputacaoPageModule {}
