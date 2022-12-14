import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaRestablecerPage } from './pagina-restablecer.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaRestablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaRestablecerPageRoutingModule {}
