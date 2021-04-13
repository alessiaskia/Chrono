import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home'},
    { title: 'Chrono', url: '/chrono', icon: 'timer'},
    { title: 'Liste des courses', url: '/cart', icon: 'cart'},
    { title: 'Gender detection', url: '/gender', icon: 'male-female'},
    { title: 'Pokémon', url: '/pokemon', icon: 'star'},
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}
}
