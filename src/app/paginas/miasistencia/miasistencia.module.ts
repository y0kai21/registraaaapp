import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiasistenciaPageRoutingModule } from './miasistencia-routing.module';

import { MiasistenciaPage } from './miasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiasistenciaPageRoutingModule
  ],
  declarations: [MiasistenciaPage]
})
export class MiasistenciaPageModule {}
