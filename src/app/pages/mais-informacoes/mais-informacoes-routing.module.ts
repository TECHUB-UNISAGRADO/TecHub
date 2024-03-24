import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaisInformacoesPage } from './mais-informacoes.page';

const routes: Routes = [
  {
    path: '',
    component: MaisInformacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaisInformacoesPageRoutingModule {}
