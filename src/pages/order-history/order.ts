import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})

export class OrderPage {
    order: any = 'ongoing';
  constructor(public navCtrl: NavController){}
  backButtonClick(){
      this.navCtrl.pop();
  }
  trackPage(page){
    this.navCtrl.push(page);
  }
  segmentChanged($event){
      console.log(this.order)
  }
}