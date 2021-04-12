import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenderPageRoutingModule } from './gender-routing.module';

import { GenderPage } from './gender.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenderPageRoutingModule,
    HttpClientModule
  ],
  declarations: [GenderPage]
})
export class GenderPageModule {}
