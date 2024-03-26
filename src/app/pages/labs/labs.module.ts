import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabsPageRoutingModule } from './labs-routing.module';

import { LabsPage } from './labs.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabsPageRoutingModule,
    SharedModule
  ],
  declarations: [LabsPage]
})
export class LabsPageModule {}
