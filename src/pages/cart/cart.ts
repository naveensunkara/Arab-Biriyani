import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage{
    cartItems: any;
    args: any = 0;
    constructor(public navParams: NavParams, public navCtrl: NavController){
        this.cartItems = navParams.data.items;
        console.log(navParams.data)
    }

    ionViewDidLoad(){
    }

    backButtonClick(){
        this.navCtrl.pop();
    }
}