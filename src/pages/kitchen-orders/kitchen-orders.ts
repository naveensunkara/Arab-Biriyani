import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
    selector: 'page-kitchen-orders',
    templateUrl: 'kitchen-orders.html'
})

export class KitchenOrdersPage {
    @ViewChild('canvas') canvas1: ElementRef;
    chart: any;
    displayType: any = 'orderDetail';
    quantity: any = {
        chickenBiriyani: 0,
        muttonBiriyani: 0,
        fishBiriyani: 0,
        eggBiriyani: 0,
        vegBiriyani: 0
    }
    orders: any = [
        {
            orderId: '100102',
            branch: 'Street Biriyani',
            location: 'Blk 11-34 Street, 189-5 Singapore 609852',
            totalQuantity: 19,
            date: '25 Apr',
            orders: [
                {
                    title: "Chicken Biriyani",
                    quantity: 3
                },
                {
                    title: "Mutton Biriyani",
                    quantity: 2
                },
                {
                    title: "Fish Biriyani",
                    quantity: 1
                },
                {
                    title: "Egg Biriyani",
                    quantity: 5
                },
                {
                    title: "Veg Biriyani",
                    quantity: 8
                }
            ]
        },
        {
            orderId: '100105',
            branch: 'Singapore Biriyani',
            location: 'Blk 56-69 Street, 150-69 Singapore 609852',
            totalQuantity: 22,
            date: '25 Apr',
            orders: [
                {
                    title: "Chicken Biriyani",
                    quantity: 5
                },
                {
                    title: "Mutton Biriyani",
                    quantity: 3
                },
                {
                    title: "Fish Biriyani",
                    quantity: 7
                },
                {
                    title: "Egg Biriyani",
                    quantity: 5
                },
                {
                    title: "Veg Biriyani",
                    quantity: 2
                }
            ]
        }
    ]

    constructor(public navCtrl: NavController) {
        this.calculateQuantity();
        console.log(this.canvas1)
    }
    ionViewDidLoad() {
        this.chart = new Chart(this.canvas1.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });

    }
    backButtonClick() {
        this.navCtrl.pop();
    }
    trackPage(page) {
        this.navCtrl.push(page);
    }
    calculateQuantity() {
        this.orders.forEach(element => {
            element.orders.forEach(item => {
                if (item.title.indexOf('Chicken') != -1) {
                    this.quantity.chickenBiriyani = this.quantity.chickenBiriyani + item.quantity;
                }
                if (item.title.indexOf('Mutton') != -1) {
                    this.quantity.muttonBiriyani = this.quantity.muttonBiriyani + item.quantity;
                }
                if (item.title.indexOf('Fish') != -1) {
                    this.quantity.fishBiriyani = this.quantity.fishBiriyani + item.quantity;
                }
                if (item.title.indexOf('Egg') != -1) {
                    this.quantity.eggBiriyani = this.quantity.eggBiriyani + item.quantity;
                }
                if (item.title.indexOf('Veg') != -1) {
                    this.quantity.vegBiriyani = this.quantity.vegBiriyani + item.quantity;
                }
            });
        });
        console.log(this.canvas1)
    }
}