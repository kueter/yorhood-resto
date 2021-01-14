import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoMenuPageRoutingModule } from './resto-menu-routing.module';

import { RestoMenuPage } from './resto-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestoMenuPageRoutingModule
  ],
  declarations: [RestoMenuPage]
})
export class RestoMenuPageModule {}
