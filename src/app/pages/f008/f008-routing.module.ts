import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F008Page } from './f008.page';

const routes: Routes = [
  {
    path: '',
    component: F008Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F008PageRoutingModule {}
