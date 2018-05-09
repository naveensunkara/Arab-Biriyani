import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-rider-delivery',
    templateUrl: 'rider-delivery.html'
})

export class RiderDeliveryPage {
    displayType: any = 'today';
    constructor(public navCtrl: NavController){}
}