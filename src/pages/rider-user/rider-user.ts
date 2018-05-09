import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { PopoverController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-rider-user',
    templateUrl: 'rider-user.html'
})

export class RiderUserPage {
    displayType: any = 'live';
    live: any = [
        {
            order: 'Order # 1100011',
            status: 'ready',
            branch: 'Little India',
            quantity: '80'
        },
        {
            order: 'Order # 1100012',
            status: 'packing',
            branch: 'Fancy',
            quantity: '60'
        },
        {
            order: 'Order # 1100013',
            status: 'packing',
            branch: 'Little India',
            quantity: '100'
        },
        {
            order: 'Order # 1100014',
            status: 'packing',
            branch: 'Fine Biriyani',
            quantity: '120'
        }
    ];
    completed: any = [
        {
            order: 'Order # 1100009',
            status: 'completed',
            branch: 'Fine Biriyani',
            quantity: '120'
        },
        {
            order: 'Order # 1100008',
            status: 'completed',
            branch: 'Little India',
            quantity: '80'
        },
        {
            order: 'Order # 1100007',
            status: 'completed',
            branch: 'Fancy',
            quantity: '60'
        },
        {
            order: 'Order # 1100006',
            status: 'completed',
            branch: 'Little India',
            quantity: '100'
        }
    ]
    constructor(public navCtrl: NavController) { }
    slider(item, type){
        let index = this.live.indexOf(item);
        if(this.live[index].sliderMargin == undefined || this.live[index].sliderMargin == '-130px -16px 0'){
            this.live[index].sliderContent = true;
            this.live[index].sliderMargin = '0 -16px 0';
            this.live[index].sliderType = type;
        }
        else{
            this.live[index].sliderMargin = '-130px -16px 0';
        }
    }
}
