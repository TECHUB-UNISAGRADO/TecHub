import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'ciencia-computacao',
    loadChildren: () => import('./pages/ciencia-computacao/ciencia-computacao.module').then( m => m.CienciaComputacaoPageModule)
  },
  {
    path: 'jogos-digitais',
    loadChildren: () => import('./pages/jogos-digitais/jogos-digitais.module').then( m => m.JogosDigitaisPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
