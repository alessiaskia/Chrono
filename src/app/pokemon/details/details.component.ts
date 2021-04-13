import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsResult } from 'src/app/_models/details-results';
import { ChartDataSets, ChartType } from 'chart.js';
import { ChartsModule, Label } from 'ng2-charts';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  details: DetailsResult;
  
  @Input() set url(value: string){
    //ici on va contacter l'API pour obtenir détails du pokemon
    //console.log(value) => url du pokémon sélectionné
    console.log(value);
    this.http.get<DetailsResult>(value).
    subscribe(data =>{
      this.data.splice(0); //pour vider le tableau deja créé au départ
      this.details = data;
      this.data.push({
        label: 'Caracteristiques principales',
        data: [
          data.stats[1].base_stat,
          data.stats[2].base_stat,
          data.stats[0].base_stat,
          data.stats[3].base_stat,
          data.stats[4].base_stat,
          data.stats[5].base_stat
        ]
      })
      console.log(this.details);
    })
  }

  data: ChartDataSets[] = [
    // { data: [10, 10, 10, 10], label: 'Caracteristiques'}
  ];

  labels: Label[] = [
    'Attaque', 'Defense', 'Points de vie', 'Defense spéciale', 'Vitesse'
  ];

  constructor(
    private http: HttpClient,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  createRadarChart(){

  }


}
