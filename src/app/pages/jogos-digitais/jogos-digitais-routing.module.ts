import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosDigitaisPage } from './jogos-digitais.page';

const routes: Routes = [
  {
    path: '',
    component: JogosDigitaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosDigitaisPageRoutingModule {}
