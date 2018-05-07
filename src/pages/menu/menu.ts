import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  menuItems: any = [
    {
      title: "Chicken Biriyani",
      price: "10.99",
      quantity: 0,
      imgSrc: ""
    },
    {
      title: "Mutton Biriyani",
      price: "19.99",
      quantity: 0,
      imgSrc: ""
    },
    {
      title: "Fish Biriyani",
      price: "11.99",
      quantity: 0,
      imgSrc: ""
    },
    {
      title: "Egg Biriyani",
      price: "7.99",
      quantity: 0,
      imgSrc: ""
    },
    {
      title: "Veg Biriyani",
      price: "5.99",
      quantity: 0,
      imgSrc: ""
    }
  ]
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }
}
