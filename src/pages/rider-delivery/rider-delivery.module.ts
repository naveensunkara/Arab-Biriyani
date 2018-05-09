import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDeliveryPage } from './rider-delivery';
import { RiderPopModule } from '../rider-pop/rider-pop.module';

@NgModule({
    declarations: [
        RiderDeliveryPage
    ],
    imports: [
        IonicPageModule.forChild(RiderDeliveryPage),
        RiderPopModule
    ],
    exports: [
        RiderDeliveryPage
    ]
})
export class RiderDeliveryModule { }   