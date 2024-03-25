import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F008PageRoutingModule } from './f008-routing.module';

import { F008Page } from './f008.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F008PageRoutingModule,
    SharedModule
  ],
  declarations: [F008Page]
})
export class F008PageModule {}
