import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDeliveryPage } from './rider-delivery';

@NgModule({
    declarations: [
        RiderDeliveryPage
    ],
    imports: [
        IonicPageModule.forChild(RiderDeliveryPage)
    ],
    exports: [
        RiderDeliveryPage
    ]
})
export class RiderDeliveryModule { }  