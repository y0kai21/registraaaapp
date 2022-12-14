import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaRestablecerPageRoutingModule } from './pagina-restablecer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaRestablecerPage } from './pagina-restablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaRestablecerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PaginaRestablecerPage]
})
export class PaginaRestablecerPageModule {}
