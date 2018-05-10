import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { RiderPopPage } from '../rider-pop/rider-pop';
@IonicPage()
@Component({
    selector: 'page-rider-delivery',
    templateUrl: 'rider-delivery.html',
    entryComponents: [RiderPopPage]
})

export class RiderDeliveryPage {
    displayType: any = 'today';
    today: any = [
        {
            order: 'PO# 1100011',
            status: 'ready',
            branch: 'Little India',
            quantity: '80',
            vessels: '3',
            phone: '+65 6363 5498',
            address: '414 Baleser Road<br>Singapore 329806'
        },
        {
            order: 'PO# 1100012',
            status: 'packing',
            branch: 'Fancy',
            quantity: '60',
            vessels: '5',
            phone: '+65 6363 3413',
            address: '414 Nasser Road<br>Singapore 456952'
        },
        {
            order: 'PO# 1100013',
            status: 'packing',
            branch: 'Little India',
            quantity: '100',
            vessels: '7',
            phone: '+65 6363 5255',
            address: '414 Rahman Road<br>Singapore 35622'
        },
        {
            order: 'PO# 1100014',
            status: 'packing',
            branch: 'Fine Biriyani',
            quantity: '120',
            vessels: '10',
            phone: '+65 6363 6734',
            address: '414 Elsaan Road<br>Singapore 63425'
        }
    ];
    completed: any = [
        {
            order: 'PO# 1100009',
            status: 'completed',
            branch: 'Fine Biriyani',
            quantity: '120',
            vessels: '10'
        },
        {
            order: 'PO# 1100008',
            status: 'completed',
            branch: 'Little India',
            quantity: '80',
            vessels: '3'
        },
        {
            order: 'PO# 1100007',
            status: 'completed',
            branch: 'Fancy',
            quantity: '60',
            vessels: '5'
        },
        {
            order: 'PO# 1100006',
            status: 'completed',
            branch: 'Little India',
            quantity: '100',
            vessels: '7'
        }
    ]
    constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) { }
    slider(item, type) {
        let index = this.today.indexOf(item);
        if (this.today[index].sliderMargin == undefined || this.today[index].sliderMargin == '-130px -16px 0') {
            this.today[index].sliderContent = true;
            this.today[index].sliderMargin = '0 -16px 0';
            this.today[index].sliderType = type;
        }
        else {
            this.today[index].sliderMargin = '-130px -16px 0';
        }
    }
    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create('RiderPopPage');
        popover.present({
            ev: myEvent
        });
    }
    openPage(page){
        this.navCtrl.push(page);
    }
}