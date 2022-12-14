import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaprincipalPageRoutingModule } from './paginaprincipal-routing.module';

import { PaginaprincipalPage } from './paginaprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaprincipalPageRoutingModule
  ],
  declarations: [PaginaprincipalPage]
})
export class PaginaprincipalPageModule {}
