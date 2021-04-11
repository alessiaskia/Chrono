import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})

export class ChronoPage implements OnInit {

  time: number;

  idInterval: any;

  times: number []; //liste de nombres
  
  constructor(
    private alertCtrl: AlertController
    ) { 
    
  }

  ngOnInit() {
    this.time = 0;
    this.times = [];
  }
  
start(){

  this.times = [];

  const start = Date.now();

  this.idInterval = setInterval(() => {
    this.time = Date.now() - start;
  }, 1);
}

stop(){
 this.alertCtrl.create({
   header: 'Confirmation',
   message: 'Are you sure you want to stop the chrono?',
  //  buttons: ['ok', 'cancel'],
  buttons: [{
    text: 'Ok',
    handler: () => {
      clearInterval((this.idInterval));
      this.idInterval = null;
    }
  }, 'cancel']
 }).then(a => a.present());
}


save(){
this.times.push(this.time);
}

}
