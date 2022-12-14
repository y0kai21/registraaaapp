import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiasistenciaPage } from './miasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: MiasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiasistenciaPageRoutingModule {}
