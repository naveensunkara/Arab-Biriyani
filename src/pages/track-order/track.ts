import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-track-order',
  templateUrl: 'track.html'
})

export class TrackPage {
  constructor(public navCtrl: NavController) { }
  nextPage() {
    this.navCtrl.push('TrackPage');
  }

  backButtonClick() {
    this.navCtrl.push('CartPage');
  }
}