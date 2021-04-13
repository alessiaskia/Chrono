import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonResult,  Result } from '../_models/pokemon-result';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

result: PokemonResult;

  constructor(
    private http: HttpClient,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
    this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon')
    .subscribe(data => {
      this.result = data;
    })
  }

  //fonction pour charger les pokemons, avec parametre "ce qui change (next/previous)" => le URL
  private load(url : string) {
   this.http.get<PokemonResult>(url)
          .subscribe(data => {
            this.result = data;
      });
  }

  //la modale est toujours un element asynchrone
  async openDetails(urlPokemon: string){
    const modale = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        url: urlPokemon
      }
    });
    modale.present();
  }

  showNext(){
   this.load(this.result.next)
  }

  showPrevious(){
    this.load(this.result.previous)
  }

}