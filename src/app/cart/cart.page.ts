import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../_models/article';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  //variable pour nouvel item
  newItem: string;

  //variable pour la liste d'items rajoutés
  items: Article[];

  //dans le construct, on appelle les actions --> injection de dépendances
  constructor(
    private actionSheetCtrl : ActionSheetController
  ) { 
  }

  ngOnInit() {
    //nècessaire d'initialiser la liste
    this.items = [];
  }

   //methode pour ajouter items
   add() {
     //pas possible d'ajouter des lignes nulles
     if(this.newItem){
       this.items.push({name: this.newItem, isChecked: false});
       //vider automatiquement le input à chaque ajout
       this.newItem = null;
     }
   }

   //création de tableau d'action qui s'ouvre pour chaque article rajouté
  async openActionSheet(item : Article) {
    const as = await this.actionSheetCtrl.create({
      header: '',
      buttons: [
        { text: item.isChecked ? 'Décocher' : 'Cocher', handler: () => {
          item.isChecked = !item.isChecked; //la valeur de la variable va etre l'inverse à chaque clic
        }},
        {text: 'Supprimer', handler: () => {
          this.items.forEach((element, index) => {
            if (element === item) this.items.splice(index, 1);

            // autre forme de l'écrire :
            // const i = this.items.indexOf(item);
            // this.items.splice(i, 1);

            // avec filter :
            // this.items = this.items.filter(element => element !== item);
          });
        }}
      ]
    });
    as.present(); //presenter les elements une fois obtenus les info
   }

}
