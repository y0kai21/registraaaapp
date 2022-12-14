import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaprincipalPage } from './paginaprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaprincipalPageRoutingModule {}
