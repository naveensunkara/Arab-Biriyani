import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html'
})

export class CartPage {
    cartItems: any = {};
    args: any = 0;
    coupon: any;
    cart: any = 0;
    tax: any = 23.45;
    total: any = 23;
    constructor(public navParams: NavParams, public navCtrl: NavController) {
        this.cartItems = navParams.data.items;
    }

    ionViewDidLoad() {
    }

    backButtonClick() {
        this.navCtrl.pop();
    }

    add(item) {
        this.cartItems.forEach((element,index) => {
            if(item === element.title){
                this.cartItems[index].quantity++;
            }
        });
        this.cartCount();
    }

    remove(item) {
        this.cartItems.forEach((element,index) => {
            if(item === element.title && element.quantity > 0){
                this.cartItems[index].quantity--;
            }
        });
        this.cartCount();
    }

    cartCount() {
        this.cart = 0;
        this.cartItems.forEach(element => {
            this.cart = element.quantity + this.cart;
        });
        if (this.cart > 99)
            this.cart = '99+';
    }
}