import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosDigitaisPageRoutingModule } from './jogos-digitais-routing.module';

import { JogosDigitaisPage } from './jogos-digitais.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogosDigitaisPageRoutingModule,
    SharedModule
  ],
  declarations: [JogosDigitaisPage]
})
export class JogosDigitaisPageModule {}
