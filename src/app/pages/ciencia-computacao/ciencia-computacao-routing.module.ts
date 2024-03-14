import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciaComputacaoPage } from './ciencia-computacao.page';

const routes: Routes = [
  {
    path: '',
    component: CienciaComputacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciaComputacaoPageRoutingModule {}
