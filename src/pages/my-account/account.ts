import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  constructor(public navCtrl: NavController) { }

  backButtonClick() {
    this.navCtrl.pop();
  }
}