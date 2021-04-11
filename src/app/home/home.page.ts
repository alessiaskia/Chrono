import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firstName : string;

  chaine: string;

  nombre: number;

  date: Date;

  isAdmin: boolean;

  list: string[];

  constructor() { }

  ngOnInit() {
    this.firstName = 'Alessia';
    this.chaine = 'ceci est une chaine de caractères';
    this.nombre = 42.63729;
    this.date = new Date();
    this.isAdmin = false;
    this.list = ['Sel', 'Poivre', 'Sucre'];
  }

  changeName(){
    this.firstName = 'Asia';
  }

}
