import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-rider-delivery',
    templateUrl: 'rider-delivery.html'
})

export class RiderDeliveryPage {
    displayType: any = 'today';
    today: any = [
        {
            order: 'PO# 1100011',
            status: 'ready',
            branch: 'Little India',
            quantity: '80',
            vessels: '3'
        },
        {
            order: 'PO# 1100012',
            status: 'packing',
            branch: 'Fancy',
            quantity: '60',
            vessels: '5'
        },
        {
            order: 'PO# 1100013',
            status: 'packing',
            branch: 'Little India',
            quantity: '100',
            vessels: '7'
        },
        {
            order: 'PO# 1100014',
            status: 'packing',
            branch: 'Fine Biriyani',
            quantity: '120',
            vessels: '10'
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
    constructor(public navCtrl: NavController){}
}