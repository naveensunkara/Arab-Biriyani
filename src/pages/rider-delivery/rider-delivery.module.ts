import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDeliveryPage } from './rider-delivery';
import { ExpandableHeader } from '../../components/expandable-header';

@NgModule({
    declarations: [
        RiderDeliveryPage,
        ExpandableHeader
    ],
    imports: [
        IonicPageModule.forChild(RiderDeliveryPage)
    ],
    exports: [
        RiderDeliveryPage
    ]
})
export class RiderDeliveryModule { }   