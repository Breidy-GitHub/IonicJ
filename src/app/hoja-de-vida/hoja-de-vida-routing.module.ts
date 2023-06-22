import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaDeVidaPage } from './hoja-de-vida.page';

const routes: Routes = [
  {
    path: '',
    component: HojaDeVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaDeVidaPageRoutingModule {}
