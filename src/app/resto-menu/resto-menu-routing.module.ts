import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestoMenuPage } from './resto-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RestoMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestoMenuPageRoutingModule {}
