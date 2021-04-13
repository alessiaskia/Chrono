import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';
import { DetailsComponent } from './details/details.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    ChartsModule
  ],
  declarations: [PokemonPage, DetailsComponent]
})
export class PokemonPageModule {}
