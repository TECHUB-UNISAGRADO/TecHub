import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciaComputacaoPageRoutingModule } from './ciencia-computacao-routing.module';

import { CienciaComputacaoPage } from './ciencia-computacao.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciaComputacaoPageRoutingModule,
    SharedModule
  ],
  declarations: [CienciaComputacaoPage]
})
export class CienciaComputacaoPageModule {}
