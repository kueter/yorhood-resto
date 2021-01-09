import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoDetailPageRoutingModule } from './resto-detail-routing.module';

import { RestoDetailPage } from './resto-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestoDetailPageRoutingModule
  ],
  declarations: [RestoDetailPage]
})
export class RestoDetailPageModule {}
